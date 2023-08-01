import { HTTP_INTERCEPTORS, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Inject, Injectable, Provider } from "@angular/core";
import { API_ERROR } from "./shared/constants";
import { BehaviorSubject, Observable, catchError, of, switchMap, take, throwError, zip } from "rxjs";
import { Router } from "@angular/router";
import { AuthService } from "./api/auth.service";


@Injectable()

export class AppInterceptor implements HttpInterceptor {

  constructor(@Inject(API_ERROR) private apiError: BehaviorSubject<Error | null>, private router: Router, private authService: AuthService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError(err => of(err).pipe(
        switchMap((err) => {
          if (err.status === 400) { return [[err, null]] }
          return zip([err], this.authService.user$).pipe(take(1))
        }),
        switchMap(([err, user]) => {
          this.apiError.next(err.error?.message);
          this.router.navigate(['/error']);
          return throwError(() => err);
        })
      ))
    );
  }

}

export const appInterceptorProvider: Provider = {
  provide: HTTP_INTERCEPTORS,
  useClass: AppInterceptor,
  multi: true,
}
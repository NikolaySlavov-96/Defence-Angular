import { HttpClient } from '@angular/common/http';
import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, Subscription, filter, tap } from 'rxjs';

import { IUser } from '../shared/interfaces';
import { environment } from 'src/environments/environment.development';
import { environment as environmentProduct } from 'src/environments/environment';
import { LocalService } from '../auth/local.service';


const apiURL = environment.apiURL;
// const apiURL = environmentProduct.apiURL;


@Injectable({
  providedIn: 'root'
})
export class AuthService implements OnDestroy {

  private user$$ = new BehaviorSubject<undefined | null | IUser>(undefined);
  user$ = this.user$$.asObservable().pipe(
    filter((val): val is IUser | null => val !== undefined)
  );


  user: IUser | null = null;

  get isLogged() {
    return this.user !== null;
  }

  subscription: Subscription;

  constructor(private httpClient: HttpClient, private localStore: LocalService) {
    this.subscription = this.user$.subscribe(u => {
      this.user = u;
    })
  }

  register(data: IUser | any) {
    return this.httpClient.post<IUser>(`${apiURL}/auth/register`, data)
      .pipe(tap(u => {
        this.localStore.createLocal('token', u.accessToken);
        this.user$$.next(u);
      }));
  }

  logout() {
    return this.httpClient.get<void>(`${apiURL}/auth/logout`)
      .pipe(tap((u) => {
        console.log(u);
        this.user$$.next(null)
      }));
  }

  login(date: IUser | any) {
    return this.httpClient.post<IUser>(`${apiURL}/auth/login`, date)
      .pipe(tap((u) => {
        console.log(u);
        this.localStore.createLocal('token', u.accessToken);
        this.user$$.next(u);
      }))
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}

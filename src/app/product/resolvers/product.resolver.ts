import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, ResolveData, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from "rxjs";
import { peroductService } from "src/app/api/product.service";
import { IProduct } from "src/app/shared/interfaces";


@Injectable({
    providedIn: 'root'
})

export class ProductResolver implements ResolveData {

    constructor(private apiService: peroductService, private router: Router) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): IProduct | null | Observable<IProduct> | Promise<IProduct> {
        const productId = route.params['id'];
        if(!productId) {
            this.router.navigate(['/catalog']);
            return null;
        }

        return this.apiService.loadProduct(productId);
    }
}
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { environment as environmentProduct } from 'src/environments/environment';
import { IProduct } from '../shared/interfaces';
import { AuthService } from './auth.service';


const apiURL = environment.apiURL;
// const apiURL = environmentProduct.apiURL;


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  product: [] | null = null;

  constructor(private httpClient: HttpClient, private authService: AuthService) { }

  loadProducts() {
    return this.httpClient.get<IProduct[]>(`${apiURL}/source/products`);
  }

  loadProduct(id: number) {
    return this.httpClient.get<IProduct>(`${apiURL}/source/product/${id}`)
  }

  createProduct(data: IProduct) {
    const token = this.authService?.user?.accessToken!;
    return this.httpClient.post<IProduct>(`${apiURL}/source/product`, data, { headers: { 'content-type': 'application/json', 'author-d': token } })
  }
}

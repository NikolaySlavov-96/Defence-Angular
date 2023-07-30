import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { environment as environmentProduct } from 'src/environments/environment';
import { IProduct } from '../shared/interfaces';


const apiURL = environment.apiURL;
// const apiURL = environmentProduct.apiURL;


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  product: [] | null = null;

  constructor(private httpClient: HttpClient) { }

  loadProducts() {
    return this.httpClient.get<IProduct[]>(`${apiURL}/source/products`);
  }

  loadProduct(id: number) {
    return this.httpClient.get<IProduct>(`${apiURL}/source/product/${id}`)
  }

  createProduct(data: IProduct) {
    return this.httpClient.post<IProduct>(`${apiURL}/source/product`, data)
  }
}

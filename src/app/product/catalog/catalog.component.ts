import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ApiService } from 'src/app/api.service';
import { IProduct } from '../../shared/interfaces';


@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {

  productList: IProduct[] | null = null;
  errorFetching = false;

  constructor(private router: Router, private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.loadProducts().subscribe({
      next: (value) => {
        this.productList = value;
      },
      error: (err) => {
        this.errorFetching = true;
      }
    })
  }
}
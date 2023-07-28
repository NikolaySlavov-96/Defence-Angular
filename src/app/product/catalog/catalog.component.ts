import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IProduct } from '../../shared/interfaces';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {

  productList: IProduct[] = [{
    product: '2',
    owner: '2',
    descriptipn: '2',
  },
  {
    product: '2',
    owner: '2',
    descriptipn: '2',
  },
  {
    product: '2',
    owner: '2',
    descriptipn: '2',
  },
  {
    product: '2',
    owner: '2',
    descriptipn: '2',
  },
  ];
  errorFetching = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.css']
})
export class DetailProductComponent implements OnInit {

  product: IProduct | null = null;

  constructor(private activateRouter: ActivatedRoute) {
    this.product = this.activateRouter.snapshot.data?.['product'][0]
  }

  ngOnInit(): void {

  }
}

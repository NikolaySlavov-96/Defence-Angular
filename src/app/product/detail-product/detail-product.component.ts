import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.css']
})
export class DetailProductComponent implements OnInit {

  product: IProduct | null = null;

  constructor(private activateRouter: ActivatedRoute, private router: Router) {
    this.product = this.activateRouter.snapshot.data?.['product'][0]
  }

  get hasLoged() {
    return true
  }

  get hasOwner() {
    return true
  }

  ngOnInit(): void {

  }
}

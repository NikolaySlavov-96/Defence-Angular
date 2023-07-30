import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/api/auth.service';
import { IProduct } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.css']
})
export class DetailProductComponent implements OnInit {

  product: IProduct | null = null;

  constructor(private activateRouter: ActivatedRoute, private router: Router, private authService: AuthService) {
    this.product = this.activateRouter.snapshot.data?.['product'][0]
  }

  get hasLoged() {
    return this.authService.isLogged;
  }

  get hasOwner() {
    return this.authService.user?._id === this.product?.owner ? true : false;
  }

  ngOnInit(): void {

  }
}

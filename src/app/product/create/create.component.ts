import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService as productService } from 'src/app/api/product.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})

export class CreateComponent {

  constructor(private router: Router, private productService: productService) { }

  createProductHandler(form: NgForm) {
    if (form.invalid) { return }
    this.productService.createProduct(form.value).subscribe(p => {
      this.router.navigate(['/product/catalog'])
    })
  }
}

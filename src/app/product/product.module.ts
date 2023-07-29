import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CreateComponent } from './create/create.component';
import { ProductRoutingModule } from './product-routing.module';
import { CatalogComponent } from './catalog/catalog.component';
import { DetailProductComponent } from './detail-product/detail-product.component';


@NgModule({
  declarations: [
    CreateComponent,
    CatalogComponent,
    DetailProductComponent,
  ],
  imports: [
    ProductRoutingModule,
    CommonModule,
    FormsModule,
  ],
  exports: [
    CreateComponent,
    CatalogComponent,
    DetailProductComponent,
  ]
})
export class ProductModule { }

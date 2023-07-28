import { NgModule, createComponent } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateComponent } from './create/create.component';
import { ProductRoutingModule } from './product-routing.module';
import { CatalogComponent } from './catalog/catalog.component';



@NgModule({
  declarations: [
    CreateComponent,
    CatalogComponent,
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
  ],
  exports: [
    CreateComponent,
    CatalogComponent,
  ]
})
export class ProductModule { }

import { NgModule, createComponent } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateComponent } from './create/create.component';
import { ProductRoutingModule } from './product-routing.module';



@NgModule({
  declarations: [
    CreateComponent,
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
  ],
  exports: [
    CreateComponent,
  ]
})
export class ProductModule { }

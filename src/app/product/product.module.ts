import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CreateComponent } from './create/create.component';
import { ProductRoutingModule } from './product-routing.module';
import { CatalogComponent } from './catalog/catalog.component';
import { DetailProductComponent } from './detail-product/detail-product.component';
import { EditComponent } from './edit/edit.component';
import { DeleteComponent } from './delete/delete.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    CreateComponent,
    CatalogComponent,
    DetailProductComponent,
    EditComponent,
    DeleteComponent,
  ],
  imports: [
    ProductRoutingModule,
    CommonModule,
    FormsModule,
    SharedModule,
  ],
  exports: [
    CreateComponent,
    CatalogComponent,
    DetailProductComponent,
  ]
})
export class ProductModule { }

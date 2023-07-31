import { RouterModule, Routes } from "@angular/router";
import { CreateComponent } from "./create/create.component";
import { CatalogComponent } from "./catalog/catalog.component";
import { DetailProductComponent } from "./detail-product/detail-product.component";
import { ProductResolver } from "./resolvers/product.resolver";
import { EditComponent } from "./edit/edit.component";
import { DeleteComponent } from "./delete/delete.component";

const routes: Routes = [
    {
        path: 'create',
        component: CreateComponent
    },
    {
        path: 'catalog',
        component: CatalogComponent
    },
    {
        path: 'detail/:id',
        resolve: {
            product: ProductResolver
        },
        component: DetailProductComponent
    },
    {
        path: 'create',
        component: CreateComponent
    },
    {
        path: 'edit/:id',
        resolve: {
            product: ProductResolver
        },
        component: EditComponent,
    },
    {
        path: 'delete/:id',
        resolve: {
            product: ProductResolver,
        },
        component: DeleteComponent,
    },
];

export const ProductRoutingModule = RouterModule.forChild(routes);
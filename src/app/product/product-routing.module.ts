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
        component: CreateComponent,
        data: {
            title: 'Create'
        }
    },
    {
        path: 'catalog',
        component: CatalogComponent,
        data: {
            title: 'Catalog'
        }
    },
    {
        path: 'detail/:id',
        resolve: {
            product: ProductResolver
        },
        component: DetailProductComponent,
        data: {
            title: 'Detail'
        }
    },
    {
        path: 'edit/:id',
        resolve: {
            product: ProductResolver
        },
        component: EditComponent,
        data: {
            title: 'Edit'
        }
    },
    {
        path: 'delete/:id',
        resolve: {
            product: ProductResolver,
        },
        component: DeleteComponent,
        data: {
            title: 'Delete'
        }
    },
];

export const ProductRoutingModule = RouterModule.forChild(routes);
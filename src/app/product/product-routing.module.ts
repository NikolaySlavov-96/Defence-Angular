import { RouterModule, Routes } from "@angular/router";
import { CreateComponent } from "./create/create.component";
import { CatalogComponent } from "./catalog/catalog.component";

const routes: Routes = [
    {
        path: 'create',
        component: CreateComponent
    },
    {
        path: 'catalog',
        component: CatalogComponent
    },
];

export const ProductRoutingModule = RouterModule.forChild(routes);
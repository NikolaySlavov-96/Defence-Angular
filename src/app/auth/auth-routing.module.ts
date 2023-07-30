import { RouterModule, Routes } from "@angular/router";
import { RegisterComponent } from "./register/register.component";
import { LogoutComponent } from "./logout/logout.component";

const routes: Routes = [
    {
        path: 'register',
        component: RegisterComponent,
    },
    {
        path: 'logout',
        component: LogoutComponent,
    },
];

export const AuthRoutingModule = RouterModule.forChild(routes);
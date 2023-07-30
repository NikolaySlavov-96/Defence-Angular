import { RouterModule, Routes } from "@angular/router";
import { RegisterComponent } from "./register/register.component";
import { LogoutComponent } from "./logout/logout.component";
import { LoginComponent } from "./login/login.component";

const routes: Routes = [
    {
        path: 'register',
        component: RegisterComponent,
    },
    {
        path: 'logout',
        component: LogoutComponent,
    },
    {
        path: 'login',
        component: LoginComponent,
    },
];

export const AuthRoutingModule = RouterModule.forChild(routes);
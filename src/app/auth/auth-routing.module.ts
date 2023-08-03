import { RouterModule, Routes } from "@angular/router";
import { RegisterComponent } from "./register/register.component";
import { LogoutComponent } from "./logout/logout.component";
import { LoginComponent } from "./login/login.component";
import { AuthActivate } from "../shared/guards/auth.activate";

const routes: Routes = [
    {
        path: 'register',
        component: RegisterComponent,
        data: {
            title: 'Register',
            loginRequired: false
        }
    },
    {
        path: 'logout',
        component: LogoutComponent,
        data: {
            title: 'Logout'
        }
    },
    {
        path: 'login',
        component: LoginComponent,
        data: {
            title: 'Login'
        }
    },
];

export const AuthRoutingModule = RouterModule.forChild(routes);

import { Routes } from '@angular/router';
import { LoginComponent } from './security/login/login.component';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';

export const ROUTES: Routes = [
    { path: '', component: LoginComponent },
    { path: 'login', component: LoginComponent },
    { path: 'userCreate', component: UserComponent }
]
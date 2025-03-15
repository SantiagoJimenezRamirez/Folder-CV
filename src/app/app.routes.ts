import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { PasswordComponent } from './components/password/password.component';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';

export const routes: Routes = [
    { path : '', redirectTo: 'home', pathMatch: 'full' },
    { path : 'home', component : HomeComponent },
    { path : 'not-found', component : NotFoundComponent},
    { path: 'forgot-password', component: ForgotPasswordComponent, }, 
    { path: 'password/:token', component: PasswordComponent, }, 
    { path: 'login', component: LoginComponent,  },
    { path: 'sign-up', component: SignUpComponent,  },
    { path : '**', redirectTo: 'not-found' }, // Ruta comodín para redirigir en caso de rutas no encontradas
];

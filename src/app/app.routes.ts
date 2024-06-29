import { Routes } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

export const routes: Routes = [
    { path : '', redirectTo: 'home', pathMatch: 'full' },
    { path : 'home', component : HomeComponent },
    { path : 'not-found', component : NotFoundComponent},
    { path : '**', redirectTo: 'not-found' } // Ruta comodín para redirigir en caso de rutas no encontradas
];

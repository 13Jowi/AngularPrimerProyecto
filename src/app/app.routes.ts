import { Routes } from '@angular/router';
import { GaleriaComponent } from './pages/galeria/galeria.component';
import { FormularioComponent } from './componentes/formulario/formulario.component';

export const routes: Routes = [
    {path: '', component: FormularioComponent},
    { path: 'galeria', component: GaleriaComponent },
    { path: '**', redirectTo: ''}
];

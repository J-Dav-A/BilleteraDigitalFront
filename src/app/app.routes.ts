import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login';
import { DashboardComponent } from './pages/dashboard/dashboard';
import {TransaccionesComponent} from './pages/transaccion/transaccion';
import { UsuarioComponent } from './pages/usuario/usuario';

export const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },

  {
    path: 'dashboard',
    component: DashboardComponent,
  },

  {
    path: 'transacciones',
    component: TransaccionesComponent,
  },

  {
    path: 'usuarios',
    component: UsuarioComponent,
  }
];

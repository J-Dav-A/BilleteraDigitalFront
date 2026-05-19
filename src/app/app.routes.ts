import { Routes } from '@angular/router';

import { LoginComponent } from './pages/login/login';
import { DashboardComponent } from './pages/dashboard/dashboard';
import { TransaccionesComponent } from './pages/transaccion/transaccion';
import { MainLayoutComponent } from './layout/main-layout/main-layout';
import { UsuarioComponent } from './pages/usuario/usuario';
import { BilleteraComponent } from './pages/billetera/billetera';
import { PerfilUsuario } from './pages/perfil-usuario/perfil-usuario';

export const routes: Routes = [
  // LOGIN
  {
    path: '',
    component: LoginComponent,
  },

  // PÁGINAS CON MENÚ
  {
    path: '',
    component: MainLayoutComponent,

    children: [
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
        component: UsuarioComponent
      },

      {
        path: 'perfil',
        component: PerfilUsuario
      },

      {
        path: 'billeteras',
        component: BilleteraComponent
      }
    ],
  },
];

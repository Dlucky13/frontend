import { Routes } from '@angular/router';
import { canActivateGuard } from '@shared/permissions';

export const routes: Routes = [
  {
    path: '',
    canActivate: [canActivateGuard],
    loadChildren: () => import('./zones/authorized/authorized.routes').then(routes => routes.AUTHORIZED_ROUTES)
    // children: [{
    //   path: 'public',
    //   loadChildren: () => import()
    // }]
  },
  {
    path: 'notauthorized',
    loadChildren: () => import('./zones/unauthorized/unauthorized.routes').then(routes => routes.UNAUTHORIZED_ROUTES)
  }

];

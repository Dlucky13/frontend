import { Routes } from '@angular/router';
import { MainComponent } from '@authorized/components';
import { AuthComponent } from '@shared/components';
import { canActivateGuard } from '@shared/permissions';

export const routes: Routes = [
  {
    path: '',
    canActivate: [canActivateGuard],
    // children: [{
    //   path: 'public',
    //   loadChildren: () => import()
    // }]
  },
  // { path: 'auth', component: AuthComponent },
  // { path: '**', redirectTo: 'auth' }
];

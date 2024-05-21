import { Routes } from '@angular/router';
import { AuthComponent } from '@shared/components';

export const routes: Routes = [
  { path: 'auth', component: AuthComponent },
  { path: '**', redirectTo: 'auth' }
];

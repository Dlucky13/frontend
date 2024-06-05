import { Routes } from "@angular/router";
import { AuthComponent } from "@shared/components";

export const UNAUTHORIZED_ROUTES: Routes = [
  { path: 'auth', component: AuthComponent },
  { path: '**', redirectTo: 'auth' }
]

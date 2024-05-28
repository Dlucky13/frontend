import { Routes } from "@angular/router";
import { AuthComponent } from "../../shared/components/auth/auth.component";
//todo solve issue with unauthorized import
// import { MainComponent } from "@unauthorized/components";

export const UNAUTHORIZED_ROUTES: Routes = [
  { path: 'auth', component: AuthComponent },
  { path: '**', redirectTo: 'auth' }
]

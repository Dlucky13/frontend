import { inject, Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { AuthService } from "@shared/services";

@Injectable({ providedIn: 'root' })
class PermissionService {
  constructor(private authService: AuthService, private router: Router) { }
  canActivate(): boolean | UrlTree {
    return this.authService.isAuthenticated()
      ? true
      : this.router.parseUrl('/notauthorized')
  }

  // canMatch(): boolean {
  //   return res;
  // }

}

export const canActivateGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  const permissionService = inject(PermissionService);
  return permissionService.canActivate();
}

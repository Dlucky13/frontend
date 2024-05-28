import { inject, Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { UserService } from "@shared/services";

@Injectable({ providedIn: 'root' })
class PermissionService {
  constructor(private userService: UserService, private router: Router) { }
  canActivate(): boolean | UrlTree {
    return this.userService.isAuthenticated()
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

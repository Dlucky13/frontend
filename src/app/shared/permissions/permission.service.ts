import { inject, Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivateFn, RouterStateSnapshot } from "@angular/router";
import { UserService } from "@shared/services";

@Injectable()
class PermissionService {
  constructor(private userService: UserService) { }
  canActivate(): boolean {
    return this.userService.isAuthenticated();
  }

  // canMatch(): boolean {
  //   return res;
  // }

}

export const canActivateGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  const permissionService = inject(PermissionService);
  return permissionService.canActivate();
}

import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })

export class UserService {
  isAuthenticated(): boolean {
    return true;
  }
}

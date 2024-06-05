import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { AuthService, UserService } from '@shared/services';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {

  constructor(
    private authService: AuthService,
    private userService: UserService
  ) { }

  name = this.userService.user?.name;

  logout() {
    this.authService.logout();
  }

}

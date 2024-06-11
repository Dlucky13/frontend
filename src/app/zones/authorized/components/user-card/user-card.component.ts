import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { AuthService, UserService } from '@shared/services';

@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [MatButtonModule, MatCardModule, MatIconModule],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.scss'
})
export class UserCardComponent {

  editMode = false;

  constructor(
    private authService: AuthService,
    private userService: UserService
  ) { }

  editToggle(): void {
    this.editMode = !this.editMode;
  }

  logout(): void {
    this.authService.logout();
  }
}

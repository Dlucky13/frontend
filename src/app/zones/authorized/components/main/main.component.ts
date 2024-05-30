import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { AuthService } from '@shared/services';
@Component({
  selector: 'app-authorized-main',
  standalone: true,
  imports: [MatButtonModule, MatSidenavModule, FormsModule, MatIconModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {


  constructor(private authService: AuthService) { }

  logout() {
    this.authService.logout();
  }

}

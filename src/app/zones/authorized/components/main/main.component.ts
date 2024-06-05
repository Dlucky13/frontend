import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { SideMenuComponent } from '../side-menu/side-menu.component';
import { UserComponent } from '../user/user.component';

@Component({
  selector: 'app-authorized-main',
  standalone: true,
  imports: [MatButtonModule, MatSidenavModule, FormsModule, MatIconModule, SideMenuComponent, UserComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

}

import { OverlayModule } from '@angular/cdk/overlay';
import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { UserService } from '@shared/services';
import { UserCardComponent } from '../user-card/user-card.component';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [MatButtonModule, UserCardComponent, OverlayModule, AsyncPipe],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {

  constructor(
    private userService: UserService
  ) { }

  user$ = this.userService.user$;
  isCardShow: boolean = false;

  showCardToggle() {
    this.isCardShow = !this.isCardShow;
  }
}

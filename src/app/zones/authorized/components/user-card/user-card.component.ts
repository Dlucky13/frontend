import { Component, OnInit } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { AuthService, FormService, UserService } from '@shared/services';

@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [MatButtonModule, MatIconModule, ReactiveFormsModule, MatInputModule],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.scss'
})
export class UserCardComponent implements OnInit {

  editMode = false;
  controlNames = ['name', 'role', 'birthdate'];
  form!: FormGroup;

  constructor(
    private authService: AuthService,
    private userService: UserService,
    private formService: FormService
  ) { }

  ngOnInit(): void {
    this.form = this.formService.createForm(this.controlNames);
  }

  editToggle(): void {
    this.editMode = !this.editMode;
  }

  logout(): void {
    this.authService.logout();
  }
}

import { JsonPipe, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { catchError, EMPTY, first, Observable } from 'rxjs';
import { AuthService, FormService } from '@shared/services';


@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, ReactiveFormsModule, NgIf, JsonPipe, MatCardModule, MatButtonModule],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss'
})
export class AuthComponent implements OnInit {

  form!: FormGroup;

  constructor(
    private formService: FormService,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.form = this.formService.createForm();
  }

  login(): void {
    this.authService.login(this.form.value);
  }

  registration(): void {
    this.authService.signin(this.form.value);
  }
}

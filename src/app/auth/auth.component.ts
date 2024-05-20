import { JsonPipe, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { catchError, EMPTY, first, Observable } from 'rxjs';


@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, ReactiveFormsModule, NgIf, JsonPipe, MatCardModule, MatButtonModule, HttpClientModule],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss'
})
export class AuthComponent implements OnInit {

  form!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private matSnackBar: MatSnackBar
  ) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.form = this.formBuilder.group({
      email: [''],
      password: ['']
    })
  }

  login(): void {
    const loginPath = 'http://localhost:3000/auth/login';
    this.addErrorHandle(this.http.
      post(loginPath, this.form.value))
      .subscribe();
  }

  registration(): void {
    const registrationPath = 'http://localhost:3000/auth/signup';
    this.addErrorHandle(this.http
      .post(registrationPath, this.form.value))
      .subscribe();
  }

  addErrorHandle(sequence: Observable<any>): Observable<any> {
    return sequence.pipe(
      first(),
      catchError(_ => {
        this.handleError();
        return EMPTY
      })
    )
  }

  private handleError() {
    this.matSnackBar.open('Что-то пошло не так', undefined, { duration: 2000 })
  }


}

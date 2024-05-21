import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ErrorHandleService } from '@shared/services';

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(
    private http: HttpClient,
    private errorHandleService: ErrorHandleService
  ) { }

  login(formData: any): void {
    const loginPath = 'http://localhost:3000/auth/login';
    this.errorHandleService.addErrorHandle(this.http.post(loginPath, formData)).subscribe();
  }

  signin(formData: any): void {
    const registrationPath = 'http://localhost:3000/auth/signup';
    this.errorHandleService.addErrorHandle(this.http.post(registrationPath, formData)).subscribe();
  }
}

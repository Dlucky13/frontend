import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ErrorHandleService } from '@shared/services';
import { CookieService } from 'ngx-cookie-service';
import { tap } from 'rxjs';
import { ApiService } from './api.service';

@Injectable({ providedIn: 'root' })
export class AuthService {

  private baseAuthPath = 'auth/'

  constructor(
    private errorHandleService: ErrorHandleService,
    private cookieService: CookieService,
    private router: Router,
    private apiService: ApiService
  ) { }

  isAuthenticated(): boolean {
    return !!this.getToken();
  }

  login(formData: any): void {
    const loginPath = `${this.baseAuthPath}login`;
    this.errorHandleService
      .addErrorHandle(
        this.apiService.post(loginPath, formData)
          .pipe(
            tap((tokenObj: any) => {
              this.cookieService.set('token', tokenObj.accessToken);
              this.router.navigate(['/'])
            }
            )
          )
      ).subscribe();
  }

  signin(formData: any): void {
    const registrationPath = `${this.baseAuthPath}signup`;
    this.errorHandleService.addErrorHandle(this.apiService.post(registrationPath, formData)).subscribe();
  }

  logout(): void {
    this.cookieService.delete('token');
    this.router.navigate(['/notauthorized']);
  }

  private getToken(): string {
    return this.cookieService.get('token');
  }

}

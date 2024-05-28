import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ErrorHandleService } from '@shared/services';
import { CookieService } from 'ngx-cookie-service';
import { tap } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(
    private http: HttpClient,
    private errorHandleService: ErrorHandleService,
    private cookieService: CookieService,
    private router: Router
  ) { }

  isAuthenticated(): boolean {
    return !!this.getToken();
  }

  login(formData: any): void {
    const loginPath = 'http://localhost:3000/auth/login';
    this.errorHandleService
      .addErrorHandle(
        this.http.post(loginPath, formData)
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
    const registrationPath = 'http://localhost:3000/auth/signup';
    this.errorHandleService.addErrorHandle(this.http.post(registrationPath, formData)).subscribe();
  }

  logout(): void {
    this.cookieService.delete('token');
    this.router.navigate(['/notauthorized']);
  }

  private getToken(): string {
    return this.cookieService.get('token');
  }

}

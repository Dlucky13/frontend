import { HttpEvent, HttpHandlerFn, HttpRequest } from "@angular/common/http";
import { inject } from "@angular/core";
import { CookieService } from "ngx-cookie-service";
import { Observable } from "rxjs";

export function loggingInterceptor(req: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>> {
  const cookieService = inject(CookieService);
  const authToken = cookieService.get('auth-token');
  const reqWithHeaderreq = req.clone({
    headers: req.headers.set('Authorization', `Bearer ${authToken}`)
  })
  return next(reqWithHeaderreq);
}

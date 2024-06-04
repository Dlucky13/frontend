import { HttpClient } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ENVIRONMENT } from "../models/tokens";

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  private apiUrl: string;

  constructor(
    @Inject(ENVIRONMENT) private environment: any,
    private http: HttpClient
  ) {
    this.apiUrl = this.environment.apiUrl;
  }

  // request(method: string, url: string, body?: any): Observable<any> {
  //   const fullUrl = `${this.apiUrl}/${url}`
  //   return body
  //     ? this.http.request(method, fullUrl, { body })
  //     : this.http.request(method, fullUrl)
  // }

  get(url: string): Observable<any> {
    const fullUrl = `${this.apiUrl}/${url}`
    return this.http.request('get', fullUrl)
  }

  post(url: string, body: any): Observable<any> {
    const fullUrl = `${this.apiUrl}/${url}`
    return this.http.request('post', fullUrl, { body })
  }

}

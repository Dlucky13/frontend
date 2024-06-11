import { Injectable } from "@angular/core";
import { User } from "@authorized/models";
import { BehaviorSubject, first, Observable, tap } from "rxjs";
import { ApiService } from "./api.service";

@Injectable({ providedIn: 'root' })

export class UserService {
  private readonly _user$: BehaviorSubject<User | null> = new BehaviorSubject<User | null>(null);

  constructor(private apiService: ApiService) {
    this.setUser();
  }

  setUser(): void {
    this.apiService.get('users/me').pipe(
      first(),
      tap((user: User) => this._user$.next(user))
    ).subscribe()
  }

  get user$(): Observable<User | null> {
    return this._user$.asObservable();
  }

}

import { Injectable } from "@angular/core";
import { catchError, EMPTY, first, Observable, tap } from "rxjs";
import { NotificationService } from "@shared/services";
import { networkMessageEnum } from "@shared/models";

@Injectable({ providedIn: 'root' })

export class ErrorHandleService {
  constructor(private notificationService: NotificationService) { }

  handleError(): void {
    this.notificationService.notify(networkMessageEnum.error);
  }

  addErrorHandle(sequence: Observable<any>): Observable<any> {
    return sequence.pipe(
      first(),
      tap(_ => this.notificationService.notify(networkMessageEnum.success)),
      catchError(_ => {
        this.handleError();
        return EMPTY
      })
    )
  }
}

import { Injectable } from "@angular/core";
import { MatSnackBar } from '@angular/material/snack-bar';
import { networkMessageEnum } from "@shared/models";

@Injectable({ providedIn: 'root' })

export class NotificationService {

  constructor(private matSnackBar: MatSnackBar) { }

  private errorMessage = 'Что-то пошло не так';
  private successMessage = 'Вы удачно залогинились';

  notify(result: networkMessageEnum) {
    this.matSnackBar.open(this.getMessage(result), undefined, {
      duration: 2000,
      panelClass: `snack-${result}`
    })
  }

  private getMessage(result: networkMessageEnum): string {
    return result === networkMessageEnum.success
      ? this.successMessage
      : this.errorMessage
  }
}

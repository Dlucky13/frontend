import { Injectable } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";

@Injectable({ providedIn: 'root' })

export class FormService {
  constructor(private formBuilder: FormBuilder) { }

  createForm(controlNames: string[]): FormGroup {
    const controls = this.createControls(controlNames)
    return this.formBuilder.group(controls);
  }

  private createControls(controlNames: string[]): { [key: string]: string[] } {
    return controlNames.reduce((acc: any, controlName) => {
      acc[controlName] = [''];
      return acc
    }, {})
  }

}

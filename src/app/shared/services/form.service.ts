import { Injectable } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";

@Injectable({ providedIn: 'root' })

export class FormService {
  constructor(private formBuilder: FormBuilder) { }

  createForm(): FormGroup {
    return this.formBuilder.group({
      email: [''],
      password: ['']
    })
  }

}

import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'auth-register-page',
  templateUrl: './register-page.component.html',
})
export class RegisterPageComponent {

  public myForm : FormGroup = this.formBuilder.group({
    name: ['', [Validators.required] ],
    email: ['', [Validators.required] ],
    username: ['', [Validators.required] ],
    password: ['', [Validators.required, Validators.minLength(8)] ],
    passwordTwo: ['', [Validators.required] ],
  })

  constructor(
    private formBuilder : FormBuilder
  ){}

  public isValidField( field : string ) : void {
    // TODO: Obtener validacion desde servicio...
  }

  public onSubmit() : void {
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched();
    }
  }

}

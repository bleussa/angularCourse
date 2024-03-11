import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidatorsService } from '../../../shared/services/validators.service';
import { EmailValidatorService } from '../../../shared/services/email-validator.service';

@Component({
  selector: 'auth-register-page',
  templateUrl: './register-page.component.html',
})
export class RegisterPageComponent {

  public myForm : FormGroup = this.formBuilder.group({
    name: ['', [Validators.required, Validators.pattern(this.customValidators.firstNameAndLastnamePattern)] ],
    email: ['', [Validators.required, Validators.pattern(this.customValidators.emailPattern)], [ this.emailValidator ] ],
    username: ['', [Validators.required, this.customValidators.cantBeStrider] ],
    password: ['', [Validators.required, Validators.minLength(6)] ],
    passwordTwo: ['', [Validators.required] ],
  }, {
    validators: [
      this.customValidators.isFieldOneEqualFieldTwo('password', 'passwordTwo'),
    ]
  })

  constructor(
    private formBuilder : FormBuilder,
    private customValidators : ValidatorsService,
    private emailValidator: EmailValidatorService,
  ){}

  public isValidField( field : string ) : boolean | null {
    return this.customValidators.isValidField( this.myForm, field );
  }

  public onSubmit() : void {
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched();
    }
  }

}

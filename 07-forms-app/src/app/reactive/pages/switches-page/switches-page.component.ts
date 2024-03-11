import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ValidatorsService } from '../../../shared/services/validators.service';

@Component({
  templateUrl: './switches-page.component.html',
  styles: ``
})
export class SwitchesPageComponent {

  public myForm : FormGroup = this.formBuilder.group({
    gender: ['M', [Validators.required] ],
    wantNotifications: [true, [Validators.required] ],
    termsAndConditions: [false, [Validators.requiredTrue] ],
  })

  constructor(
    private formBuilder : FormBuilder,
    private validatorsService : ValidatorsService,
  ){}

  public onSave() : void{
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      console.log('Error en el formulario');
      return;
    }
    console.log(this.myForm);
  }

  public isValidField(field : string) : boolean | null{
    return this.validatorsService.isValidField(this.myForm, field);
  }

  public getFieldError(field : string) : string | null{
    return this.validatorsService.getFieldError(this.myForm, field);
  }


}

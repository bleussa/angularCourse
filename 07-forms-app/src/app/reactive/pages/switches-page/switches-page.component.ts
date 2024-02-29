import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

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
    return this.myForm.controls[field].errors
      && this.myForm.controls[field].touched;
  }

  public getFieldError(field : string) : string | null{
    if ( !this.myForm.controls[field] ) return null;

    const errors = this.myForm.controls[field].errors || {};
    for (const key of Object.keys(errors)) {
      switch( key ){
        case 'required':
          return 'Este campo es requerido!';

        case 'minlength':
          return `Este campo tiene un minimo de ${ errors['minlength'].requiredLength } caracteres!`;

      }
    }
    return null;
  }


}

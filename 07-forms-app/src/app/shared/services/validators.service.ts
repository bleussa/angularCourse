import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AbstractControl, FormArray, FormControl, FormGroup, ValidationErrors } from '@angular/forms';

@Injectable({providedIn: 'root'})
export class ValidatorsService {

  public firstNameAndLastnamePattern: string = '([a-zA-Z]+) ([a-zA-Z]+)';
  public emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

  constructor(
    // private httpClient: HttpClient
  ){}

  // Validamos que el usuario no sea igual a 'Strider'
  public cantBeStrider = ( control : FormControl ) : ValidationErrors | null => {
    const value = control.value;

    if (value == 'Strider') return {
      noStrider: false,
    }
    return null
  }

  // Validamos que dos campos sean distintos
  public isFieldOneEqualFieldTwo = ( fieldOne : string, fieldTwo : string ) : ValidationErrors | null => {

    return ( formGroup : AbstractControl) : ValidationErrors | null => {

      const fieldValueOne = formGroup.get(fieldOne)?.value;
      const fieldValueTwo = formGroup.get(fieldTwo)?.value;

      if (fieldValueOne !== fieldValueTwo) {
        formGroup.get(fieldTwo)?.setErrors( {notEqualFrields: true} );

        return { notEqualFields: true};
      }

      formGroup.get(fieldTwo)?.setErrors(null);
      return null;
    }

  }

  // Validamos que el input no tenga errores.
  public isValidField( form : FormGroup, field : string ) : boolean | null {
    return  form.controls[field].errors
            && form.controls[field].touched;
  }

  // Validamos que el inputArray no tenga errores.
  public isValidFieldInArray(formArray : FormArray, index : number ) : boolean | null {
    return  formArray.controls[index].errors
            && formArray.controls[index].touched;
  }

  // Traemos los mensaje
  public getFieldError(form : FormGroup, field : string) : string | null{
    if ( !form.controls[field] ) return null;
    const errors = form.controls[field].errors || {};
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

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  templateUrl: './basic-page.component.html',
})
export class BasicPageComponent implements OnInit{

  //* Se pueden crear FormGroups de estas dos formas, creando un objeto FormControl
  //* por cada input o directamente con el FormBuilder y el metodo .group
  // public myForm : FormGroup = new FormGroup({
  //   name     : new FormControl(''),
  //   price    : new FormControl(0),
  //   inStorage: new FormControl(0),
  // });

  public myForm : FormGroup = this.formBuilder.group({
    name: ['', [ Validators.required, Validators.minLength(3) ] ],
    price: [0, [ Validators.required, Validators.min(0) ] ],
    inStorage: [0, [ Validators.required, Validators.min(0), Validators.max(99) ] ],
  })

  constructor(
    private formBuilder : FormBuilder,
  ){}

  ngOnInit(): void {

  }

  public onSave() : void {
    if (this.myForm.invalid){
      this.myForm.markAllAsTouched();
      return;
    }
    this.myForm.reset({price:0,inStorage:0});
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

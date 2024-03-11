import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidatorsService } from '../../../shared/services/validators.service';

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
    private validatorsService : ValidatorsService,
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
    return this.validatorsService.isValidField(this.myForm, field);
  }

  public getFieldError(field : string) : string | null{
    return this.validatorsService.getFieldError(this.myForm, field);
  }

}

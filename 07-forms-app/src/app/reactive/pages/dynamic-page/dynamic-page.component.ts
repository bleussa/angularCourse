import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ValidatorsService } from '../../../shared/services/validators.service';

@Component({
  templateUrl: './dynamic-page.component.html',
})
export class DynamicPageComponent {

  public myForm : FormGroup = this.formBuilder.group({
    name: ['', [ Validators.required, Validators.minLength(3)]],
    favoriteGames: this.formBuilder.array([
      ['Metal Gear', Validators.required],
      ['Death Stranding', Validators.required],
    ]),
  })

  public newFavorite : FormControl = new FormControl('', [ Validators.required ])

  constructor(
    private formBuilder : FormBuilder,
    private validatorsService : ValidatorsService,
  ){}

  get favoriteGames(){
    return this.myForm.controls['favoriteGames'] as FormArray;
  }

  public isValidField(field : string) : boolean | null{
    return this.validatorsService.isValidField(this.myForm, field);
  }

  public isValidFieldInArray(formArray : FormArray, index : number ) : boolean | null {
    return this.validatorsService.isValidFieldInArray(formArray, index);
  }

  public getFieldError(field : string) : string | null{
    return this.validatorsService.getFieldError(this.myForm, field);
  }

  public onSubmit() : void{

    if ( this.myForm.invalid ) {
      this.myForm.markAllAsTouched();
      return ;
    }

    console.log(this.myForm.value);
    (this.myForm.controls['favoriteGames'] as FormArray) = this.formBuilder.array([]);
    this.myForm.reset();

  }

  public onDelete( index : number ) : void {
    this.favoriteGames.removeAt(index);
  }

  public onCreate(  ) : void {
    if (this.newFavorite.invalid) return;

    const newGame = this.newFavorite.value;

    this.favoriteGames.push(
      this.formBuilder.control( newGame, Validators.required )
    )

    this.newFavorite.reset();


  }

}

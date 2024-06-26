import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  templateUrl: './product-page.component.html',
  styleUrl: './product-page.component.css'
})
export class ProductPageComponent {

  // Modo tradicional de inyectar
  /*
  constructor(
    private fb: FormBuilder
  ){}
  */

  // Modo nuevo para inyectar
  private fb = inject(FormBuilder);

  public color: string = 'green';
  public myForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(6), Validators.email]]
  })

  public changeColor() {
    this.color = '#xxxxxx'.replace(/x/g, y => (Math.random() * 16 | 0).toString(16));
  }

}

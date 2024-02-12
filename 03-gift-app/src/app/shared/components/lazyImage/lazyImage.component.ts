import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'shared-lazyImage',
  templateUrl: './lazyImage.component.html',

})
export class LazyImageComponent implements OnInit{

  constructor() { }
  ngOnInit(): void {
    if (!this.url) {
      throw new Error('ERROR: Falta el URL de la imagen...')
    }
    if (!this.altText) {
      throw new Error('ERROR: Falta el texto alternativo...')
    }
  }

  @Input()
  public url! : string;

  @Input()
  public altText : string = '';

  public hasLoaded : boolean = false;

  public onLoad() : void {
    setTimeout(() => {
      this.hasLoaded = true;
    }, 1000)
  }

}

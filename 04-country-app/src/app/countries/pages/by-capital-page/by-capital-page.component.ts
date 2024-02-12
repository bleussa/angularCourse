import { Component } from '@angular/core';

@Component({
  selector: 'countries-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: ``
})
export class ByCapitalPageComponent {

  public searchByCapital(term : string) : void {
    console.log('By capital page');
    console.log(term);
  }

}

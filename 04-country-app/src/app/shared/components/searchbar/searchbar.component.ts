import { Component, Input } from '@angular/core';

@Component({
  selector: 'shared-searchbar',
  templateUrl: './searchbar.component.html',
})
export class SearchbarComponent {

  constructor() { }

  @Input()
  public searchTerm : string = '';

}

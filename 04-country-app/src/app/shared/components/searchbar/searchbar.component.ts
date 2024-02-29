import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'shared-searchbar',
  templateUrl: './searchbar.component.html',
})
export class SearchbarComponent {

  constructor() { }

  @Input()
  public searchTerm : string = '';

  @Output()
  public searchEnter = new EventEmitter<string>();

  public execEvent(value: string){
    this.searchEnter.emit(value);
  }

}

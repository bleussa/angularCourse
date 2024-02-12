import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'gifs-searchbar',
  template: `
    <div class="d-flex" style="align-items: center; gap: 20px;">
      <h5>Buscar</h5>
      <input
        type="text"
        class="form-control"
        placeholder="Buscar GIFs..."
        (keyup.enter)="searchTag()"
        #inputValue
      >
    </div>
  `,
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent  {

  constructor(
    private gifsService : GifsService
  ) {

  }

  @ViewChild('inputValue')
  tagInput! : ElementRef<HTMLInputElement>;

  searchTag() : void {
    const newTag = this.tagInput.nativeElement.value;
    this.gifsService.searchTag(newTag);
    this.tagInput.nativeElement.value = '';

  }

}

import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/Country';

@Component({
  selector: 'countries-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: ``
})
export class ByRegionPageComponent {

  constructor(
    private countriesService : CountriesService,
  ){}

  public countries : Country[] = [];

  public searchRegion(term : string) : void{
    if (!term) return;

    this.countriesService.searchRegion(term)
    .subscribe(
      countries => this.countries = countries
    )
  }

}

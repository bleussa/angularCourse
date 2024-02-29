import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/Country';

@Component({
  selector: 'countries-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: ``
})
export class ByCountryPageComponent {

  constructor(
    public countriesService : CountriesService,
  ){}

  public countries : Country[] = [];

  public searchByCountry(param : string){
    if (!param) return;

    this.countriesService.searchCountry(param)
    .subscribe(
      countries => this.countries = countries
    )
  }

}

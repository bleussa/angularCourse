import { Component, Input } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/Country';

@Component({
  selector: 'countries-country-table',
  templateUrl: './country-table.component.html',
  styleUrls: ['./country-table.component.css']
})
export class CountryTableComponent {

  constructor() { }

  @Input()
  public countries : Country[] = [];

}

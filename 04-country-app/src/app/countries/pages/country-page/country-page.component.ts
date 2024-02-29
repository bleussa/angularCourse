import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/Country';
import { switchMap } from 'rxjs';

@Component({
  selector: 'countries-country-page',
  templateUrl: './country-page.component.html',
  styles: ``
})
export class CountryPageComponent implements OnInit{

  constructor(
    private activatedRoute : ActivatedRoute,
    private countriesService : CountriesService,
    private router : Router
  ){}

  public country? : Country;

  ngOnInit(): void {
    this.activatedRoute.params
    .pipe(
      switchMap( ( {id} ) => this.countriesService.searchByAlphaCode( id ) )
    )
    .subscribe( country => {
      if (!country) return this.router.navigateByUrl('');
      return setTimeout(() => {
        this.country = country;
      }, 500)
    })
  }

}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CountriesService } from '../../services/countries.service';
import { Region, SmallCountry } from '../../interfaces/country.interfaces';
import { filter, switchMap, tap } from 'rxjs';

@Component({
  selector: 'app-selector-page',
  templateUrl: './selector-page.component.html',
})
export class SelectorPageComponent implements OnInit{

  public myForm: FormGroup = this.formBuilder.group({
    region : ['', Validators.required ],
    country: ['', Validators.required ],
    border : ['', Validators.required ],
  });

  public selectedRegion? : Region;
  public countriesByRegion : SmallCountry[] = [];
  public selectedCountry? : SmallCountry;
  public borders: SmallCountry[] = [];

  constructor(
    private formBuilder : FormBuilder,
    private countriesService : CountriesService,
  ){}


  public ngOnInit(): void {
    this.onRegionChange();
    this.onCountryChange();
  }

  get getRegionList() : Region[] {
    return this.countriesService.getRegions;
  }

  public onRegionChange() : void {
    this.myForm.get('region')!.valueChanges
      .pipe(
        tap( () => this.myForm.get('country')!.setValue('') ),
        tap( () => this.borders = [] ),
        tap( region => this.selectedRegion = region),
        switchMap( region => this.countriesService.getContriesByRegion(region) )
      )
      .subscribe( countries => {
        this.countriesByRegion = countries
      })
  }

  public onCountryChange() : void {
    this.myForm.get('country')!.valueChanges
      .pipe(
        tap( () => this.myForm.get('border')!.setValue('') ),
        filter( (value: string) => value.length > 0 ),
        switchMap( alphacode => this.countriesService.getCountryByAlphacode(alphacode) ),
        switchMap( country => this.countriesService.getCountryBordersByAlphacode(country.borders)),
      )
      .subscribe( countries => {
        this.borders = countries;
        console.log(this.borders);
      })
  }



}

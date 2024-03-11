import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Country, Region, SmallCountry } from '../interfaces/country.interfaces';
import { Observable, combineLatest, map, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  private BASE_URL : string = 'https://restcountries.com/v3.1'

  private regions : Region[] = [ Region.Africa, Region.Americas, Region.Asia, Region.Europe, Region.Oceania ];

  constructor(
    private http: HttpClient
  ){}

  get getRegions() : Region[]{
    return [ ...this.regions ];
  }

  public getContriesByRegion(region : Region) : Observable<SmallCountry[]>{

    if (!region) return of([]);

    const url : string = `${this.BASE_URL}/region/${region}?fields=cca3,name,borders`
    return this.http.get<Country[]>(url)
    .pipe(
      map( countries => countries.map(country => ({
        name: country.name.common,
        cca3: country.cca3,
        borders: country.borders ?? [],
      }))),
      tap( response => response),
    )
  }

  public getCountryByAlphacode(alphacode : string) : Observable<SmallCountry>{

    // if (!alphacode) return of();

    const url : string = `${this.BASE_URL}/alpha/${ alphacode }?fields=cca3,name,borders`;
    return this.http.get<Country>( url )
      .pipe(
        map( country => ({
          name: country.name.common,
          cca3: country.cca3,
          borders: country.borders ?? [],
        })),
        tap (country => console.log(country)),
      )
  }


  public getCountryBordersByAlphacode(borders : string[]) : Observable<SmallCountry[]>{

    if (!borders || borders.length === 0) return of([]);

    const countriesRequest : Observable<SmallCountry>[] = [];

    borders.forEach(code => {
      const request = this.getCountryByAlphacode(code);
      countriesRequest.push(request);
    });

    return combineLatest(countriesRequest);

  }


}

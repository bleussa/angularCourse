import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Country } from '../interfaces/Country';
import { Observable, catchError, map, of } from 'rxjs';
import { Image } from '../interfaces/Image';

@Injectable({providedIn: 'root'})
export class CountriesService {
  constructor(
    private http: HttpClient
    ) {

  }

  private API_URL : string = 'https://restcountries.com/v3.1'

  public searchCapital( term : string) : Observable<Country[]>{
    const url = `${this.API_URL}/capital/${term}`;

    return this.http.get<Country[]>(url)
    .pipe(
      catchError( error => of([]))
    );
  }

  public searchCountry( term : string ) : Observable<Country[]> {
    const url = `${this.API_URL}/name/${term}`;

    return this.http.get<Country[]>(url)
    .pipe(
      catchError( error => of([]))
    )
  }

  public searchRegion( term : string ) : Observable<Country[]> {
    const url = `${this.API_URL}/region/${term}`;

    return this.http.get<Country[]>(url)
    .pipe(
      catchError( error => of([]))
    )
  }

  public searchByAlphaCode( code : string ) : Observable<Country | null> {
    const url = `${this.API_URL}/alpha/${code}`;

    return this.http.get<Country[]>(url)
    .pipe(
      map( countries => countries.length > 0 ? countries[0]: null),
      catchError( () => of(null))
    )
  }

  public searchImage(country: string) {
    const url = `https://api.unsplash.com/search/photos/?client_id=ayGt0aTJM8nkLAM-47xTbWUgy_x0dQfiQSixuKBLMNs&query=${country}`;

    return this.http.get<Image>(url);
  }

}

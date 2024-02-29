import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Hero } from '../interfaces/hero.interface';
import { Observable, catchError, map, of } from 'rxjs';
import { environments } from '../../../environments/environments';

@Injectable({providedIn: 'root'})
export class HeroService {
  constructor(
    private http: HttpClient
  ) {}

  // Traemos la variable de las variables de entorno
  private BASE_URL = environments.BASE_URL;

  // Metodo GET para todos los heroes
  getHeroes() : Observable<Hero[]> {
    return this.http.get<Hero[]>(`${this.BASE_URL}/heroes`);
  }

  // Metodo GET para un heroe
  getHeroById(id : string) : Observable<Hero | undefined>{
    return this.http.get<Hero>(`${this.BASE_URL}/heroes/${id}`)
    .pipe(
      catchError(error => of(undefined))
    )
  }

  // Metodo POST para un heroe
  addHero(hero : Hero) : Observable<Hero>{
    return this.http.post<Hero>(`${this.BASE_URL}/heroes`, hero);
  }

  updateHero(hero : Hero) : Observable<Hero>{
    if (!hero.id) throw Error('Hero ID is required.')
    return this.http.patch<Hero>(`${this.BASE_URL}/heroes/${hero.id}`, hero)
  }

  deleteHero(id : string) : Observable<boolean>{
    return this.http.delete(`${this.BASE_URL}/heroes/${id}`)
    .pipe(
      map( response => true),
      catchError(error => of(false)),
    )
  }

  // Metodo GET para sugerencias
  getHeroSuggestions(query : string) : Observable<Hero[]>{
    return this.http.get<Hero[]>(`${this.BASE_URL}/heroes?q=${ query }`)
  }





}

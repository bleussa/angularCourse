import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environments } from '../../../environments/environments';
import { User } from '../interfaces/user.interface';
import { Observable, catchError, map, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private BASE_URL = environments.BASE_URL;
  private user? : User;

  constructor(
    private http : HttpClient
  ){}

  get currentUser() : User | undefined{
    if (!this.user) return undefined;
    return structuredClone( this.user );
  }

  login(email : string, password : string) : Observable<User>{
    return this.http.get<User>(`${this.BASE_URL}/users/1`)
      .pipe(
        tap( user => { this.user = user }),

        tap( user => { localStorage.setItem('token', 'ALDK56D4asd45wq4d32SAD654dq.asd456asdq4w8q') }),
      )
  }

  logout() : void{
    this.user = undefined;
    localStorage.removeItem('token');
  }

  checkAuth() : Observable<boolean>{
    if ( !localStorage.getItem('token') ) return of(false);

    const token = localStorage.getItem('token');

    return this.http.get<User>(`${this.BASE_URL}/users/1`)
            .pipe(
              tap(user => this.user = user),
              map(user => !!user),
              catchError(error => of(error)),
            )

  }

}

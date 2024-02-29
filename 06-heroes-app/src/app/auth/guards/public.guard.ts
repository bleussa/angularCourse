import { Injectable } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { ActivatedRouteSnapshot, CanActivate, CanMatch, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable, map, tap } from 'rxjs';

@Injectable({providedIn: 'root'})
export class PublicGuardService implements CanMatch, CanActivate{

  constructor(
    private authService : AuthService,
    private router : Router,
  ){}

  private checkAuthStatus() : Observable<boolean> {
    return this.authService.checkAuth()
      .pipe(
        tap( isAuthenticated => {
          if (isAuthenticated) this.router.navigate(['./'])
        }),
        map(isAuthenticated => !isAuthenticated),
      )
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean>{
    return this.checkAuthStatus();
  }

  canMatch(route: Route, segments: UrlSegment[]): | Observable<boolean>{
    return this.checkAuthStatus();
  }

}

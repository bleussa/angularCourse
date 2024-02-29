import { Component } from '@angular/core';
import { AuthService } from '../../../auth/services/auth.service';
import { User } from '../../../auth/interfaces/user.interface';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-layout-page',
  templateUrl: './layout-page.component.html',
  styles: ``
})
export class LayoutPageComponent {

  sidebarsItems = [
    { label: 'Listado',icon: 'list',path: './list' },
    { label: 'Añadir',icon: 'add',path: './new' },
    { label: 'Buscar',icon: 'search',path: './search' },
  ]

  constructor(
    private authService : AuthService,
    private router : Router,
  ){}

  get currentUser() : User | undefined {
    return this.authService.currentUser;
  }

  public onLogout() : void {
    this.authService.logout();
    this.router.navigate(['/auth/login'])
  }

}

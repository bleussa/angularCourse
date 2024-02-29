import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { User } from '../../interfaces/user.interface';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styles: ``
})
export class LoginPageComponent {

  constructor(
    private authService : AuthService,
    private router : Router,
  ){}

  public onLogin() : void{
    this.authService.login('albert@gmail.com', '123456')
      .subscribe( user => {
        this.router.navigate(['/']);
      })
  }

}

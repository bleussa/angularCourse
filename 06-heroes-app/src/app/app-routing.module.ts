import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundError } from 'rxjs';
import { NotfoundPageComponent } from './shared/pages/notfound-page/notfound-page.component';
import { AuthGuardService } from './auth/guards/auth.guard';
import { PublicGuardService } from './auth/guards/public.guard';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then( m => m.AuthModule),
    canActivate: [ PublicGuardService ],
    canMatch: [ PublicGuardService ],
  },
  {
    path: 'heroes',
    loadChildren: () => import('./heroes/heroes.module').then( m => m.HeroesModule),
    canActivate: [ AuthGuardService ],
    canMatch: [ AuthGuardService ],
  },
  {
    path: '404',
    component: NotfoundPageComponent,
  },
  {
    path: '',
    redirectTo: 'heroes',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: '404',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

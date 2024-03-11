import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: 'countries',
    loadChildren: () => import('./country/country.module').then( m => m.CountryModule),
  },
  {
    path: '**',
    redirectTo: 'countries',
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { BasicsPageComponent } from './pages/basics-page/basics-page.component';
import { NumbersPageComponent } from './pages/numbers-page/numbers-page.component';
import { CommonPageComponent } from './pages/common-page/common-page.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { CustomPageComponent } from './pages/custom-page/custom-page.component';
import { ToggleCasePipe } from './pipes/toggle-case.pipe';
import { CanFlyPipe } from './pipes/can-fly.pipe';
import { SortByPipe } from './pipes/sort-by.pipe';



@NgModule({
  declarations: [

    // COMPONENTS
    BasicsPageComponent,
    NumbersPageComponent,
    CommonPageComponent,
    CustomPageComponent,

    // PIPES
    ToggleCasePipe,
    CanFlyPipe,
    SortByPipe
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    PrimeNgModule,
  ]
})
export class ProductsModule { }

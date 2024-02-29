import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotfoundPageComponent } from './pages/notfound-page/notfound-page.component';



@NgModule({
  declarations: [
    NotfoundPageComponent,
  ],
  exports: [
    NotfoundPageComponent,
  ]
})
export class SharedModule { }

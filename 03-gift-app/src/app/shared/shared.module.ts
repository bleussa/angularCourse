import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyImageComponent } from './components/lazyImage/lazyImage.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

@NgModule({
  declarations: [
    SidebarComponent,
    LazyImageComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SidebarComponent,
    LazyImageComponent
  ]
})
export class SharedModule { }

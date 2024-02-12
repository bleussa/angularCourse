import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FriendsModule } from './friends/friends.module';
import { ListComponent } from './friends/components/list/list.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FriendsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimeNgModule } from './prime-ng/prime-ng.module';
import { SharedModule } from './shared/shared.module';

// Configuración de idiomas - locale
import localeEsAR from "@angular/common/locales/es-AR";
import localeFrCA from "@angular/common/locales/fr-CA";
import { registerLocaleData } from "@angular/common";

registerLocaleData( localeEsAR );
registerLocaleData( localeFrCA );

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'es-AR' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

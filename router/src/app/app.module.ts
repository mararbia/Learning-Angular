import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { SecondPageComponent } from './second-page/second-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PageWithParametersComponent } from './page-with-parameters/page-with-parameters.component';

@NgModule({
  declarations: [
    AppComponent,
    SecondPageComponent,
    PageNotFoundComponent,
    PageWithParametersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

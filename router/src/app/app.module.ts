import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { SecondPageComponent } from './second-page/second-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PageWithParametersComponent } from './page-with-parameters/page-with-parameters.component';
import { ProtectedPageComponent } from './protected-page/protected-page.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    SecondPageComponent,
    PageNotFoundComponent,
    PageWithParametersComponent,
    ProtectedPageComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

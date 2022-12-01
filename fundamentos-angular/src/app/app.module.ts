import { FirstComponentComponent } from './first-component/first-component.components';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SecondComponentComponent } from './second-component/second-component.component';
import { MultiplyByPipe } from './multiply-by.pipe';
import { PipeCustomizedComponent } from './pipe-customized/pipe-customized.component';
import { TwoWayDataBindingComponent } from './two-way-data-binding/two-way-data-binding.component';
import { FormsModule } from '@angular/forms';
import { RenderingListsComponent } from './rendering-lists/rendering-lists.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponentComponent,
    SecondComponentComponent,
    MultiplyByPipe,
    PipeCustomizedComponent,
    TwoWayDataBindingComponent,
    RenderingListsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
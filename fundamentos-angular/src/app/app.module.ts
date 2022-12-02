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
import { CustomComponentComponent } from './custom-component/custom-component.component';
import { ParentComponentComponent } from './parent-component/parent-component.component';
import { ChildComponentComponent } from './child-component/child-component.component';
import { Service1ExampleComponent } from './service1-example/service1-example.component';
import { Service2ExampleComponent } from './service2-example/service2-example.component';
import { LifecycleComponent } from './lifecycle/lifecycle.component';
import { ParentLifecycleComponent } from './parent-lifecycle/parent-lifecycle.component';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponentComponent,
    SecondComponentComponent,
    MultiplyByPipe,
    PipeCustomizedComponent,
    TwoWayDataBindingComponent,
    RenderingListsComponent,
    CustomComponentComponent,
    ParentComponentComponent,
    ChildComponentComponent,
    Service1ExampleComponent,
    Service2ExampleComponent,
    LifecycleComponent,
    ParentLifecycleComponent,
    CardComponent,
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

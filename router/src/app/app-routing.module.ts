import { PageWithParametersComponent } from './page-with-parameters/page-with-parameters.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { FirstPageComponent } from './first-page/first-page.component';
import { SecondPageComponent } from './second-page/second-page.component';

const routes: Routes = [
  { path: "first-page", component: FirstPageComponent },
  { path: "second-page", component: SecondPageComponent },
  { path: "", redirectTo: "first-page", pathMatch: "full" },
  { path: "page-with-parameters/:id", component: PageWithParametersComponent },
  { path: "**", component: PageNotFoundComponent}

]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UiPageHomeComponent } from './components/ui-page-home/ui-page-home.component';
import { UiPageLoginComponent } from './components/ui-page-login/ui-page-login.component';

const routes: Routes = [
  {path: '', component: UiPageLoginComponent} ,
  {path: 'home', component: UiPageHomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

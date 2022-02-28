import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UiPageLoginComponent } from './ui-page-login.component';



const routes: Routes = [
  {
    path: ''
    ,component: UiPageLoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UiPageLoginRoutingModule { }

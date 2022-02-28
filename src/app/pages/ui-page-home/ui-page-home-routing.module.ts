import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UiPageHomeComponent } from './ui-page-home.component';


const routes: Routes = [
  {
    path: 'home',
    component: UiPageHomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UiPageHomeRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UiPageContactComponent } from './ui-page-contact.component';




const routes: Routes = [
  {
    path: '',
    component: UiPageContactComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UiPageContactRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UiPageProjectsComponent } from './ui-page-projects.component';




const routes: Routes = [
  {
    path: '',
    component: UiPageProjectsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UiPageProjectsRoutingModule { }

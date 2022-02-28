import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UiPageExperienceComponent } from './ui-page-experience.component';




const routes: Routes = [
  {
    path: '',
    component: UiPageExperienceComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UiPageExperienceRoutingModule { }

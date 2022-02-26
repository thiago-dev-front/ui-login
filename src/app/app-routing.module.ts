import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UiPageLoginComponent } from './components/ui-page-login/ui-page-login.component';

const routes: Routes = [
  {path: '', component: UiPageLoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

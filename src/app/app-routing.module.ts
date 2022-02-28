import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PreloadAllModules } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./pages/ui-page-login/ui-page-login.module').then((m) => m.UiPageLoginModule),
  },

  {
    path: 'home',
    loadChildren: () =>
      import('./pages/ui-page-home/ui-page-home.module').then((m) => m.UiPageHomeModule),
  },
  // { path: '**', redirectTo: '' },
];



@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules, initialNavigation: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

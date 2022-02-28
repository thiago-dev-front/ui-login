
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
  {
    path: 'experience',
    loadChildren: () =>
      import('./pages/ui-page-experience/ui-page-experience.module').then((m) => m.UiPageExperienceModule),
  },
  {
    path: 'projects',
    loadChildren: () =>
      import('./pages/ui-page-projects/ui-page-projects.module').then((m) => m.UiPageProjectsModule),
  },
  {
    path: 'contact',
    loadChildren: () =>
      import('./pages/ui-page-contact/ui-page-contact.module').then((m) => m.UiPageContactModule),
  }

  // { path: '**', redirectTo: '' },
];



@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules, initialNavigation: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

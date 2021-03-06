
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PreloadAllModules } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [

  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },

  {
    path: 'login',
    loadChildren: () =>
      import('./pages/ui-page-login/ui-page-login.module').then((m) => m.UiPageLoginModule),
  },

  {
    path: 'home',
    loadChildren: () =>
      import('./pages/ui-page-home/ui-page-home.module').then((m) => m.UiPageHomeModule),
      canActivate: [AuthGuard]
  },
  {
    path: 'experience',
    loadChildren: () =>
      import('./pages/ui-page-experience/ui-page-experience.module').then((m) => m.UiPageExperienceModule),
      canActivate: [AuthGuard]
  },
  {
    path: 'projects',
    loadChildren: () =>
      import('./pages/ui-page-projects/ui-page-projects.module').then((m) => m.UiPageProjectsModule),
      canActivate: [AuthGuard]
  },
  {
    path: 'contact',
    loadChildren: () =>
      import('./pages/ui-page-contact/ui-page-contact.module').then((m) => m.UiPageContactModule),
      canActivate: [AuthGuard]
  }

  // { path: '**', redirectTo: '' },
];



@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules, initialNavigation: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiPageHeaderComponent } from './ui-header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule } from '@angular/router';




@NgModule({
  imports: [
    CommonModule,
    FontAwesomeModule,
    RouterModule

  ],
  declarations: [UiPageHeaderComponent],
  exports: [UiPageHeaderComponent],

})
export class UiPageHeaderModuleModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiPageHeaderComponent } from './ui-header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';




@NgModule({
  imports: [
    CommonModule,
    FontAwesomeModule,

  ],
  declarations: [UiPageHeaderComponent],
  exports: [UiPageHeaderComponent],

})
export class UiPageHeaderModuleModule { }

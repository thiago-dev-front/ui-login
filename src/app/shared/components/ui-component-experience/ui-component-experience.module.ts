import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { UiComponentExperienceComponent } from './ui-component-experience.component';

@NgModule({
  imports: [
    CommonModule,
    FontAwesomeModule,

  ],
  declarations: [UiComponentExperienceComponent],
  exports: [UiComponentExperienceComponent],

})
export class UiExperienceComponentModule { }

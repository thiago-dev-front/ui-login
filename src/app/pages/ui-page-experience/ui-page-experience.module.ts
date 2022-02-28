import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/shared/modules/material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { SharedModules } from 'src/app/shared/modules/shared-components/shared.module';
import { UiPageExperienceComponent } from './ui-page-experience.component';
import { UiPageExperienceRoutingModule } from './ui-page-experience-routing.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    UiPageExperienceRoutingModule,
    SharedModules
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
  declarations: [UiPageExperienceComponent],

})
export class UiPageExperienceModule { }

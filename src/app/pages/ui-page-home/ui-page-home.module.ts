import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiPageHomeComponent } from './ui-page-home.component';
import { MaterialModule } from 'src/app/shared/modules/material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { UiPageHomeRoutingModule } from './ui-page-home-routing.module';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { SharedModules } from 'src/app/shared/modules/shared-components/shared.module';
import { NgCircleProgressModule } from 'ng-circle-progress';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    UiPageHomeRoutingModule,
    SharedModules,

  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
  declarations: [UiPageHomeComponent],

})
export class UiPageHomeModule { }

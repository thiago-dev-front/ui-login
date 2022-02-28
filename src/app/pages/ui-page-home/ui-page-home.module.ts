import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiPageHomeComponent } from './ui-page-home.component';
import { BaseModules } from 'src/app/shared/modules/base/base.module';
import { MaterialModule } from 'src/app/shared/modules/material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { UiPageHomeRoutingModule } from './ui-page-home-routing.module';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

@NgModule({
  imports: [
    CommonModule,
    BaseModules,
    MaterialModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    UiPageHomeRoutingModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
  declarations: [UiPageHomeComponent],

})
export class UiPageHomeModule { }

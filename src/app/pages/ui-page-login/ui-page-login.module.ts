import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiPageLoginComponent } from './ui-page-login.component';
import { MaterialModule } from 'src/app/shared/modules/material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { UiPageLoginRoutingModule } from './ui-page-login-routing.module';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { SharedModules } from 'src/app/shared/modules/shared-components/shared.module';



@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    UiPageLoginRoutingModule,
    SharedModules
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
  declarations: [UiPageLoginComponent],
})
export class UiPageLoginModule { }

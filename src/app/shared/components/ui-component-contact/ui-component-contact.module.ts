import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiComponentContactComponent } from './ui-component-contact.component';
import { MaterialModule } from '../../modules/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';


@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    SweetAlert2Module


  ],
  declarations: [UiComponentContactComponent],
  exports: [UiComponentContactComponent]
})
export class UiComponentContactModule { }

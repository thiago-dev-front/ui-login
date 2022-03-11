import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiComponentContactComponent } from './ui-component-contact.component';
import { MaterialModule } from '../../modules/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,


  ],
  declarations: [UiComponentContactComponent],
  exports: [UiComponentContactComponent]
})
export class UiComponentContactModule { }

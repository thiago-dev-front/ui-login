import { MaterialModule } from 'src/app/shared/modules/material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiComponentProjectsComponent } from './ui-component-projects.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  declarations: [UiComponentProjectsComponent],
  exports: [UiComponentProjectsComponent]
})
export class UiComponentProjectsModule { }

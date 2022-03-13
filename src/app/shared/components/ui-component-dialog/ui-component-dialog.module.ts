import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogElements } from './ui-component-dialog.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [DialogElements],
  exports: [DialogElements]
})
export class UiComponentDialogModule { }

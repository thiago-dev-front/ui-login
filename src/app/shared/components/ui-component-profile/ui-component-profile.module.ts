import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiComponentProfileComponent } from './ui-component-profile.component';
import { UiCircleProgressBartModule } from '../ui-component-circle-progress-bar/ui-component-circle-progress-bar.module';


@NgModule({
  imports: [
    CommonModule,
    UiCircleProgressBartModule


  ],
  declarations: [UiComponentProfileComponent],
  exports: [UiComponentProfileComponent],

})
export class UiProfiletModule { }

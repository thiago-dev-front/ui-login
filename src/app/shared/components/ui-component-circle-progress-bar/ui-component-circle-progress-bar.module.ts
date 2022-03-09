import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiComponentCircleProgressBarComponent } from './ui-component-circle-progress-bar.component';
import { NgCircleProgressModule } from 'ng-circle-progress';



@NgModule({
  imports: [
    CommonModule,
    NgCircleProgressModule,
    NgCircleProgressModule.forRoot({
      // set defaults here
      radius: 100,
      titleFontSize: '40',
      outerStrokeWidth: 16,
      innerStrokeWidth: 8,
      outerStrokeColor: "#78C000",
      innerStrokeColor: "#C7E596",
      animationDuration: 600,





    })


  ],
  declarations: [UiComponentCircleProgressBarComponent],
  exports: [UiComponentCircleProgressBarComponent],

})
export class UiCircleProgressBartModule { }

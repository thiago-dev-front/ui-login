import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiPageFooterComponent } from './ui-footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';





@NgModule({
  imports: [
    CommonModule,
    FontAwesomeModule,

  ],
  declarations: [UiPageFooterComponent],
  exports: [UiPageFooterComponent],

})
export class UiPageFooterModuleModule { }

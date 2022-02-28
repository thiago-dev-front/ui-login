import { NgModule } from  '@angular/core';
import { UiExperienceComponentModule } from '../../components/ui-component-experience/ui-component-experience.module';

@NgModule({
imports: [ UiExperienceComponentModule],
exports: [ UiExperienceComponentModule]

})

export  class  SharedModules { }

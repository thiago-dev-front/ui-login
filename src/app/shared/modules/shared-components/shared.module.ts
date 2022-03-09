import { NgModule } from  '@angular/core';
import { UiCircleProgressBartModule } from '../../components/ui-component-circle-progress-bar/ui-component-circle-progress-bar.module';
import { UiExperienceComponentModule } from '../../components/ui-component-experience/ui-component-experience.module';
import { UiProfiletModule } from '../../components/ui-component-profile/ui-component-profile.module';

@NgModule({
imports: [ UiExperienceComponentModule, UiCircleProgressBartModule, UiProfiletModule],
exports: [ UiExperienceComponentModule, UiCircleProgressBartModule, UiProfiletModule]

})

export  class  SharedModules { }

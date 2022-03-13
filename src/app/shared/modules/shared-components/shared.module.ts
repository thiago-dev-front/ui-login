import { NgModule } from  '@angular/core';
import { UiCircleProgressBartModule } from '../../components/ui-component-circle-progress-bar/ui-component-circle-progress-bar.module';
import { UiComponentContactModule } from '../../components/ui-component-contact/ui-component-contact.module';
import { UiComponentDialogModule } from '../../components/ui-component-dialog/ui-component-dialog.module';
import { UiExperienceComponentModule } from '../../components/ui-component-experience/ui-component-experience.module';
import { UiProfiletModule } from '../../components/ui-component-profile/ui-component-profile.module';
import { UiComponentProjectsModule } from '../../components/ui-component-projects/ui-component-projects.module';

@NgModule({
imports: [ UiExperienceComponentModule, UiCircleProgressBartModule, UiProfiletModule, UiComponentContactModule, UiComponentDialogModule, UiComponentProjectsModule],
exports: [ UiExperienceComponentModule, UiCircleProgressBartModule, UiProfiletModule, UiComponentContactModule, UiComponentDialogModule, UiComponentProjectsModule]

})

export  class  SharedModules { }

import { NgModule } from  '@angular/core';
import { UiPageFooterModuleModule } from '../../components/ui-component-footer/ui-footer.module';
import { UiPageHeaderModuleModule } from '../../components/ui-component-header/ui-header.module';


@NgModule({
imports: [UiPageHeaderModuleModule , UiPageFooterModuleModule],
exports: [UiPageHeaderModuleModule, UiPageFooterModuleModule]

})

export  class  BaseModules { }

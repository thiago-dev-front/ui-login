import { NgModule } from  '@angular/core';
import { UiPageFooterModuleModule } from '../../components/ui-page-footer/ui-page-footer.module';
import { UiPageHeaderModuleModule } from '../../components/ui-page-header/ui-page-header.module';


@NgModule({
imports: [UiPageHeaderModuleModule , UiPageFooterModuleModule],
exports: [UiPageHeaderModuleModule, UiPageFooterModuleModule]

})

export  class  BaseModules { }

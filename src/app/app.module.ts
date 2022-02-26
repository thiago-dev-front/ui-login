import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UiPageFooterComponent } from './components/ui-page-footer/ui-page-footer.component';
import { UiPageHeaderComponent } from './components/ui-page-header/ui-page-header.component';
import { UiPageLoginComponent } from './components/ui-page-login/ui-page-login.component';
import { UiPageMainComponent } from './components/ui-page-main/ui-page-main.component';

@NgModule({
  declarations: [
    AppComponent,
    UiPageHeaderComponent,
    UiPageMainComponent,
    UiPageLoginComponent,
    UiPageFooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

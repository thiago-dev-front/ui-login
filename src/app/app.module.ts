import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UiPageFooterComponent } from './components/ui-page-footer/ui-page-footer.component';
import { UiPageHeaderComponent } from './components/ui-page-header/ui-page-header.component';
import { UiPageLoginComponent } from './components/ui-page-login/ui-page-login.component';
import { UiPageMainComponent } from './components/ui-page-main/ui-page-main.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modules/material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { UiPageHomeComponent } from './components/ui-page-home/ui-page-home.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    UiPageHeaderComponent,
    UiPageMainComponent,
    UiPageLoginComponent,
    UiPageFooterComponent,
    UiPageHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    FontAwesomeModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

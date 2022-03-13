import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MaterialModule } from './shared/modules/material/material.module';
import { BaseModules } from './shared/modules/base/base.module';
import { SharedModules } from './shared/modules/shared-components/shared.module';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { AuthGoogleService } from './shared/service/auth-google.service';
import { CookieService } from 'ngx-cookie-service';
import { AngularFirestoreModule} from '@angular/fire/firestore'
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    SharedModules,
    ReactiveFormsModule,
    FormsModule,
    FontAwesomeModule,
    BaseModules,
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    SweetAlert2Module.forRoot({
      provideSwal: () => import('sweetalert2').then(({ default: swal }) => swal.mixin({
        // example: set global options here
        confirmButtonText: `Confirmer`,
        cancelButtonText: `Annuler`
      }))
    })

  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
  providers: [AuthGoogleService, CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }

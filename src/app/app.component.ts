import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { AuthGoogleService } from './shared/service/auth-google.service';
import { AuthGuard} from './guards/auth.guard'
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ui-login';
  showContent: boolean = false
  constructor(private guards:AuthGuard, public afAuth: AngularFireAuth, private router: Router, private authGoogle: AuthGoogleService, private cookieService: CookieService) {

  }



   ngOnInit() {
    this.authGoogle.isDisplay.subscribe(
      show => this.showContent = show,
      console.log('dede', this.showContent)
    )
   }





}

import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import { CookieService } from 'ngx-cookie-service';
import { AuthGoogleService } from '../../service/auth-google.service';


@Component({
  selector: 'app-ui-page-header',
  templateUrl: './ui-header.component.html',
  styleUrls: ['./ui-header.component.scss']
})
export class UiPageHeaderComponent implements OnInit {
  faCode = faCode
  showContent: boolean = false;
  activeClass: boolean = false;
  iconGoogle: string = '../../../assets/svg/icon-google.svg';

  constructor(private authGoogle: AuthGoogleService, public afAuth: AngularFireAuth, private cookieService: CookieService, private router: Router) { }

    ngOnInit() {
      this.authGoogle.isDisplay.subscribe(
        show => this.showContent = show,
      )
   }

  signOutLoginGoogle() {
    this.activeClass = !this.activeClass
    console.log('hum' , this.activeClass)
    this.authGoogle.signOut();

  }

 logout() {
   this.authGoogle.logout()
 }


}

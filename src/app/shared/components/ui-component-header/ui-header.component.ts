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
  isDisplay: boolean = false;
  iconGoogle: string = '../../../assets/svg/icon-google.svg';

  constructor(private authGoogle: AuthGoogleService, public afAuth: AngularFireAuth, private cookieService: CookieService, private router: Router) { }

    ngOnInit() {
      console.log('adaoata' , this.authenticated())
   }


   authenticated(): boolean {
     let isAuthHeader = this.afAuth.authState !== null;
     this.isDisplay = isAuthHeader
     console.log('isDisplay isDisplay' , this.isDisplay)
    return isAuthHeader
  }

  // signLoginGoogle() {
  //   this.authGoogle.signIn();
  //   this.router.navigate(['/home'])
  // }

  signOutLoginGoogle() {
    this.authGoogle.signOut();
    this.router.navigate(['login']);
  }



}

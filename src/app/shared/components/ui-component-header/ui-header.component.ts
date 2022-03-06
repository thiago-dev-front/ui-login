import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import { AuthGoogleService } from '../../service/auth-google.service';


@Component({
  selector: 'app-ui-page-header',
  templateUrl: './ui-header.component.html',
  styleUrls: ['./ui-header.component.scss']
})
export class UiPageHeaderComponent implements OnInit {
  faCode = faCode


  constructor(private authGoogle: AuthGoogleService, private router: Router, public afAuth: AngularFireAuth) { }

  ngOnInit(): void {
    // console.log('aquiii 2' , this.authGoogle.afAuth.user)
  }

  // signLoginGoogle() {
  //   this.authGoogle.signIn();
  //   this.router.navigate(['/home'])
  // }

  // signOutLoginGoogle() {
  //   this.authGoogle.signOut()
  // }



}

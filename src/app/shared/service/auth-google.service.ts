import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router, UrlTree } from '@angular/router';
import firebase from 'firebase/app';

@Injectable({
  providedIn: 'root',
})
export class AuthGoogleService {
  constructor(public afAuth: AngularFireAuth, private router: Router) {}

  ngOnInit() {

  }

  async signIn() {
    const googleAuthProvider =  new firebase.auth.GoogleAuthProvider();
    await this.afAuth.signInWithPopup(googleAuthProvider);
    const user = await this.afAuth['currentUser'];
    const isAuthenticated = user ? true : false;

    if (isAuthenticated) {
      this.router.navigate(['home']);
      return true;
    } else {
      this.router.navigate(['login']);

    }

    return isAuthenticated;

  }


  signOut() {
    this.afAuth.signOut();
  }

}

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

//   teste() {
//     this.signIn().then(data => {
//       console.log(data);
//       const jsonData = JSON.stringify(data)
//       localStorage.setItem('data', jsonData)
//       console.log(jsonData);
//       return data;

//   })


// }
  // async getUser(x: boolean) {
  //   const user = await this.afAuth['currentUser'];
  //   console.log('1', user);
  //   const isAuthenticated = user ? true : false;

  //   console.log('2', isAuthenticated);
  //   if (isAuthenticated) {
  //     this.router.navigate(['home']);
  //     console.log('isAuthenticated:, ', isAuthenticated);
  //     console.log('user', user);
  //     return true;
  //   } else {
  //     this.router.navigate(['login']);
  //     console.log('isAuthenticated:, ', isAuthenticated);
  //     console.log('user', user);

  //   }
  //   x = isAuthenticated
  //   return x;
  // }

  async signIn() {
    const googleAuthProvider =  new firebase.auth.GoogleAuthProvider();
    await this.afAuth.signInWithPopup(googleAuthProvider);
    console.log('qual é o valor' , googleAuthProvider)
    const user = await this.afAuth['currentUser'];
    console.log('qual é o valor 2' , this.afAuth.signInWithPopup(googleAuthProvider))
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
    this.router.navigate(['login']);
  }

}

import { Injectable, EventEmitter } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { MatDialog } from '@angular/material/dialog';
import { Router, UrlTree } from '@angular/router';
import firebase from 'firebase/app';
import { DialogElements } from '../components/ui-component-dialog/ui-component-dialog.component';
import { Usuario } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class AuthGoogleService {
  public userIsLogged: boolean = false;

  isDisplay = new EventEmitter<boolean>();

  constructor(
    public afAuth: AngularFireAuth,
    private router: Router,
    public dialog: MatDialog
  ) {}

  ngOnInit() {}

  async signIn() {
    const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
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
    this.userIsLogged = false;
    this.isDisplay.emit(false);
    this.router.navigate(['/login']);
  }

  login(user: Usuario) {
    if (user.username === 'thiago@portal.com' && user.password == 123456) {
      this.userIsLogged = true;
      this.isDisplay.emit(true);
      this.router.navigate(['/home']);
    } else {
      this.userIsLogged = false;
      this.isDisplay.emit(false);
      this.openDialog();
    }
  }

  logout() {
    this.userIsLogged = false;
    this.isDisplay.emit(false);
    this.router.navigate(['/login']);
  }

  openDialog() {
    this.dialog.open(DialogElements);
  }
}

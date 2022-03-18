import { Component, OnInit, Input } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthGoogleService } from 'src/app/shared/service/auth-google.service';
import { AuthGuard } from '../../guards/auth.guard';
import { CookieService } from 'ngx-cookie-service';
import { MatDialog } from '@angular/material/dialog';
import { DialogElements } from 'src/app/shared/components/ui-component-dialog/ui-component-dialog.component';

@Component({
  selector: 'app-ui-page-login',
  templateUrl: './ui-page-login.component.html',
  styleUrls: ['./ui-page-login.component.scss'],
})
export class UiPageLoginComponent implements OnInit {
  login: FormGroup;
  hide = true;
  circuit: string = '../../assets/circuit.mp4';
  iconGoogle: string = '../../../assets/svg/icon-google.svg';
  isAuthenticated: boolean = false;
  userLogin: any;
  listUsers: Array<any> = [];
  constructor(
    private guards: AuthGuard,
    private authGoogle: AuthGoogleService,
    private router: Router,
    public afAuth: AngularFireAuth,
    private cookieService: CookieService
  ) {
    this.login = new FormGroup({
      username: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(6),
      ]),
    });
  }

  submit() {}

  ngOnInit() {
    this.authGoogle.afAuth.user.subscribe((user) => {
      this.userLogin = user;
      this.listUsers = { ...this.userLogin };
    });
  }

  signLoginGoogle() {
    this.authGoogle.signIn();
  }

  signOutLoginGoogle() {
    this.authGoogle.signOut();
  }

  loginMain() {
    let obj = {
      username: this.login.controls['username'].value,
      password: this.login.controls['password'].value,
    };
    this.authGoogle.login(obj);
  }
}

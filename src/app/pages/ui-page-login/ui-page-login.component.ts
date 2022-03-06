import { Observable } from 'rxjs';
import { Component, OnInit, Input } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthGoogleService } from 'src/app/shared/service/auth-google.service';
import { AuthGuard} from '../../guards/auth.guard';
import firebase from 'firebase/app';

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
  isAuthenticated: boolean = false
  userLogin : any;
  listUsers: Array<any>  = []
  constructor(private guards : AuthGuard, private authGoogle: AuthGoogleService, private router: Router, public afAuth: AngularFireAuth) {
    this.login = new FormGroup({
      username: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(6),
      ]),

    });


  }

  submit(){
    console.log(this.login.controls['username'].value);
    console.log(this.login.controls['password'].value);
    }


  ngOnInit() {
     this.authGoogle.afAuth.user.subscribe(user => {
       this.userLogin = user


       this.listUsers =  {...this.userLogin}
       console.log('hora da verdade', this.listUsers);
     })


  }

   signLoginGoogle() {
    this.authGoogle.signIn()

  }

  signOutLoginGoogle() {
    this.authGoogle.signOut()
  }


}



import { AngularFireAuth } from '@angular/fire/auth';
import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthGoogleService } from '../shared/service/auth-google.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {

  constructor(private afAuth: AngularFireAuth, private router: Router, private authGoogle: AuthGoogleService) {}
  async canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Promise<boolean | UrlTree> {

    const user = await this.afAuth['currentUser'];
    console.log('user' , user)
    const isAuthenticated = user ? true : false;
    if (isAuthenticated) {
      console.log('isAuthenticated:, ' , isAuthenticated);
      // this.isLogged = true;
      // console.log('isLogged:, ' , route);
      // console.log('isLogged:, ' , state);
      return true

    }

    else {
      this.router.navigate(['login']);
      console.log('isAuthenticated:, ' , isAuthenticated);

      // this.isLogged = false;
      // console.log('isLogged:, ' , route);
      // console.log('isLogged:, ' , state);
    }
    return isAuthenticated;

  }

}

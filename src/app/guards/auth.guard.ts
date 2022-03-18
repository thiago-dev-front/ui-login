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
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {

  constructor(private afAuth: AngularFireAuth, private router: Router, private authGoogle: AuthGoogleService,
    private cookieService: CookieService
    ) {}
  async canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Promise<boolean | UrlTree> {

    const user = await this.afAuth['currentUser'];
    const isAuthenticated = user ? true : false;
    const isUserLogin = this.authGoogle.userIsLogged
    // this.cookieService.set('isLogin', JSON.stringify(isAuthenticated))
    // let getAuth = this.cookieService.get("isLogin")
    // let isActiveBoolean = Boolean(getAuth)

    if (isAuthenticated || isUserLogin) {
      return true
    }
    else {
      this.router.navigate(['login']);

    }

    return isAuthenticated;

  }



}

import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { AuthGoogleService } from './shared/service/auth-google.service';
import { AuthGuard} from './guards/auth.guard'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ui-login';


  constructor(private guards:AuthGuard, public afAuth: AngularFireAuth, private router: Router, private authGoogle: AuthGoogleService) {

  }



   ngOnInit() {

   }


  //   console.log('fifaaaaaaaaaa' , this.isDisplay)

  // }






}

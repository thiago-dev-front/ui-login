import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import {AuthGoogleService} from '../../shared/service/auth-google.service'

@Component({
  selector: 'app-ui-page-projects',
  templateUrl: './ui-page-projects.component.html',
  styleUrls: ['./ui-page-projects.component.scss']
})
export class UiPageProjectsComponent implements OnInit {

  constructor(private authGoogle: AuthGoogleService, private router: Router, public afAuth: AngularFireAuth) { }

  ngOnInit(): void {

  }


}

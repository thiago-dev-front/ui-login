import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-ui-page-login',
  templateUrl: './ui-page-login.component.html',
  styleUrls: ['./ui-page-login.component.scss'],
})
export class UiPageLoginComponent implements OnInit {
  login: FormGroup;
  hide = true;
  circuit: string = '../../assets/circuit.mp4'
  constructor() {
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

  }

}

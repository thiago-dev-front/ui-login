import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ui-component-profile',
  templateUrl: './ui-component-profile.component.html',
  styleUrls: ['./ui-component-profile.component.scss']
})
export class UiComponentProfileComponent implements OnInit {
  logoUninove = '../../../../assets/svg/logo-uninove.svg'
  constructor() { }

  ngOnInit() {
  }

}

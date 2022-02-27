import { Component, OnInit } from '@angular/core';
import { faCode } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-ui-page-header',
  templateUrl: './ui-page-header.component.html',
  styleUrls: ['./ui-page-header.component.scss']
})
export class UiPageHeaderComponent implements OnInit {
  faCode = faCode


  constructor() { }

  ngOnInit(): void {
  }

}

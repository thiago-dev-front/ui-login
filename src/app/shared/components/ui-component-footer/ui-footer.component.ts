import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ui-page-footer',
  templateUrl: './ui-footer.component.html',
  styleUrls: ['./ui-footer.component.scss']
})
export class UiPageFooterComponent implements OnInit {
  public messagem = 'Olá, eu vim do componente pai';
  teste: Array<any> = []
  count: any
  constructor() { }

  ngOnInit() {

  }

  onActivate(event) {
    let scrollToTop = window.setInterval(() => {
        let pos = window.pageYOffset;
        if (pos > 0) {
            window.scrollTo(0, pos - 20); // how far to scroll on each step
        } else {
            window.clearInterval(scrollToTop);
        }
    }, 16);
}


}

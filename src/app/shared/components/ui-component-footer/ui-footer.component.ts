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

  async reciverFeedback(count: any) {
    console.log('Foi emitido o evento e chegou no pai >>>> ', count);
    let x  = await Object.keys(count)
    this.teste = x
    console.log('opa',   x)
  }
}

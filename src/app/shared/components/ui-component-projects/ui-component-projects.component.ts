import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ui-component-projects',
  templateUrl: './ui-component-projects.component.html',
  styleUrls: ['./ui-component-projects.component.scss']
})
export class UiComponentProjectsComponent implements OnInit {
  netshoes: string = '../../assets/net-zat.mp4';
  dotz: string = '../../assets/ganhe-port.mp4';

  textNetshoes = `Trabalhei em conjunto com o time de desenvolvimento e operações para a construção do ecommerce Netshoes e Zattini, ambos utilizando ATG e Endeca (Oracle) e posteriormente migrando para o Freedom.`;
  textDotz = `Atualmente trabalho no time de desenvolvimento Dotz e juntos construímos uma nova interface utilizando o Angular, esse trabalho foi um dos maiores desafios da minha carreira, mas também muito gratificante.`;
  constructor() { }

  ngOnInit() {
  }

}

import { Component } from '@angular/core';

import { PoMenuItem } from '@po-ui/ng-components';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  readonly menus: Array<PoMenuItem> = [
    {label: 'Sobre o Campeonato', link: '/sobre-o-campeonato'},
    {label: 'Artilheiros', link: '/artilheiros'},
    {label: 'Classificação', link: '/classificacao'}
  ];
}

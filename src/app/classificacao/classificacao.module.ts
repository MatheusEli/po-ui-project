import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClassificacaoRoutingModule } from './classificacao-routing.module';
import { ClassificacaoComponent } from './classificacao.component';
import { PoModule } from '@po-ui/ng-components';


@NgModule({
  declarations: [ClassificacaoComponent],
  imports: [
    CommonModule,
    PoModule,
    ClassificacaoRoutingModule
  ]
})
export class ClassificacaoModule { }

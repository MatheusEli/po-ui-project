import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClassificacaoRoutingModule } from './classificacao-routing.module';
import { ClassificacaoComponent } from './classificacao.component';
import { PoModule } from '@po-ui/ng-components';
import { PoCodeEditorModule } from '@po-ui/ng-code-editor';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [ClassificacaoComponent],
  imports: [
    CommonModule,
    PoModule,
    FormsModule,
    PoCodeEditorModule,
    ClassificacaoRoutingModule
  ]
})
export class ClassificacaoModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClassificacaoComponent } from './classificacao.component';

const routes: Routes = [
  {
    path: '', component: ClassificacaoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClassificacaoRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SobreCampeonatoComponent } from './sobre-campeonato.component';

const routes: Routes = [
  {path: '', component: SobreCampeonatoComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SobreCampeonatoRoutingModule { }

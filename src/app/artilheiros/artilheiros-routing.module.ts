import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdicionarArtilheiroComponent } from './adicionar-artilheiro/adicionar-artilheiro.component';
import { ArtilheirosComponent } from './artilheiros.component';

const routes: Routes = [
  {
    path: '',
    component: ArtilheirosComponent
  },
  {
    path:'edit',
    component: AdicionarArtilheiroComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArtilheirosRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: 'sobre-o-campeonato', 
    loadChildren: () => import('./sobre-campeonato/sobre-campeonato.module').then(m => m.SobreCampeonatoModule)
  },
  {
    path: 'artilheiros', 
    loadChildren: () => import('./artilheiros/artilheiros.module').then(m => m.ArtilheirosModule)
  },
  {
    path: 'classificacao', 
    loadChildren: () => import('./classificacao/classificacao.module').then(m => m.ClassificacaoModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

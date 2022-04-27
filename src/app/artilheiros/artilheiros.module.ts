import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArtilheirosRoutingModule } from './artilheiros-routing.module';
import { ArtilheirosComponent } from './artilheiros.component';
import { PoModule } from '@po-ui/ng-components';
import { AdicionarArtilheiroComponent } from './adicionar-artilheiro/adicionar-artilheiro.component';
import { ArtilheirosService } from './artilheiros.service';


@NgModule({
  declarations: [ArtilheirosComponent, AdicionarArtilheiroComponent],
  imports: [
    CommonModule,
    PoModule,
    ArtilheirosRoutingModule
  ],
  providers: [ArtilheirosService]
})
export class ArtilheirosModule { }

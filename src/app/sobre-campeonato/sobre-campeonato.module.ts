import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SobreCampeonatoRoutingModule } from './sobre-campeonato-routing.module';
import { SobreCampeonatoComponent } from './sobre-campeonato.component';
import { PoModule } from '@po-ui/ng-components';


@NgModule({
  declarations: [SobreCampeonatoComponent],
  imports: [
    CommonModule,
    PoModule,
    SobreCampeonatoRoutingModule
  ]
})
export class SobreCampeonatoModule { }

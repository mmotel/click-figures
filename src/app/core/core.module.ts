import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from './../shared/shared.module';

import { CoreRoutingModule } from './core-routing.module';
import { FiguresListComponent } from './component/figures-list/figures-list.component';

@NgModule({
  imports: [
    CommonModule,
    CoreRoutingModule,

    SharedModule,
  ],
  declarations: [FiguresListComponent]
})
export class CoreModule { }

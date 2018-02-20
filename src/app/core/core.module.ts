import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from './../shared/shared.module';

import { CoreRoutingModule } from './core-routing.module';
import { FiguresListComponent } from './component/figures-list/figures-list.component';
import { AreaComponent } from './component/area/area.component';
import { PerimeterComponent } from './component/perimeter/perimeter.component';

@NgModule({
  imports: [
    CommonModule,
    CoreRoutingModule,

    SharedModule,
  ],
  declarations: [FiguresListComponent, AreaComponent, PerimeterComponent]
})
export class CoreModule { }

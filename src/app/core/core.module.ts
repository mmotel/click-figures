import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from './../shared/shared.module';

import { CoreRoutingModule } from './core-routing.module';
import { FiguresListComponent } from './component/figures-list/figures-list.component';
import { AreaComponent } from './component/area/area.component';
import { PerimeterComponent } from './component/perimeter/perimeter.component';
import { FiguresFormComponent } from './component/figures-form/figures-form.component';
import { TriangleFormComponent } from './component/triangle-form/triangle-form.component';
import { SquareFormComponent } from './component/square-form/square-form.component';
import { CircleFormComponent } from './component/circle-form/circle-form.component';

@NgModule({
  imports: [
    CommonModule,
    CoreRoutingModule,

    SharedModule,
  ],
  declarations: [FiguresListComponent, AreaComponent, PerimeterComponent, FiguresFormComponent, TriangleFormComponent, SquareFormComponent, CircleFormComponent]
})
export class CoreModule { }

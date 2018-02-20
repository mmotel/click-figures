import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FiguresListComponent } from './component/figures-list/figures-list.component';
import { AreaComponent } from './component/area/area.component';
import { PerimeterComponent } from './component/perimeter/perimeter.component';


const routes: Routes = [
  {
    path: 'list', component: FiguresListComponent,
  },
  {
    path: 'area/:figure', component: AreaComponent,
  },
  {
    path: 'perimeter/:figure', component: PerimeterComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }

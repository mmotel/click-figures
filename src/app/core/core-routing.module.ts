import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FiguresListComponent } from './component/figures-list/figures-list.component';


const routes: Routes = [
  {
    path: 'list', component: FiguresListComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }

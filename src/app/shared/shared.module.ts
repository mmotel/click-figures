import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
    MatToolbarModule, MatButtonModule, MatIconModule, MatRadioModule,
    MatSelectModule, MatInputModule,
} from '@angular/material';
import { TitleBarComponent } from './component/title-bar/title-bar.component';


const MODULES = [
    CommonModule, RouterModule, FormsModule,
];

const MD_MODULES = [
  MatToolbarModule, MatButtonModule, MatIconModule, MatRadioModule,
  MatSelectModule, MatInputModule,
];

const COMPONENTS = [
  TitleBarComponent
];


@NgModule({
  imports: [
    MODULES, MD_MODULES,
  ],
  declarations: [
    COMPONENTS,
  ],
  exports: [
    MODULES, MD_MODULES, COMPONENTS,
  ]
})
export class SharedModule { }


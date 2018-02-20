import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
    MatToolbarModule, MatButtonModule, MatIconModule, MatRadioModule,
    MatSelectModule, MatInputModule,
} from '@angular/material';


const MODULES = [
    CommonModule, RouterModule, FormsModule,
];

const MD_MODULES = [
  MatToolbarModule, MatButtonModule, MatIconModule, MatRadioModule,
  MatSelectModule, MatInputModule,
];

const COMPONENTS = [];


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


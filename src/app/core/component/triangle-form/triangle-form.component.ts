import { Component, OnInit, Input } from '@angular/core';

import { Triangle } from './../../model';


@Component({
  selector: 'cf-triangle-form',
  template: `
    <cf-nonnegative-number-field
      [name]="'Side A'"
      [(value)]="model.sideA"
    ></cf-nonnegative-number-field>
    <cf-nonnegative-number-field
      [name]="'Side B'"
      [(value)]="model.sideB"
    ></cf-nonnegative-number-field>
    <cf-nonnegative-number-field
      [name]="'Side C'"
      [(value)]="model.sideC"
    ></cf-nonnegative-number-field>
  `,
  styleUrls: ['./triangle-form.component.scss']
})
export class TriangleFormComponent {
  @Input() model: Triangle;
}

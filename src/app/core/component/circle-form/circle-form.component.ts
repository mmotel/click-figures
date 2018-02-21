import { Component, Input } from '@angular/core';

import { Circle } from './../../model/circle';


@Component({
  selector: 'cf-circle-form',
  template: `
    <cf-nonnegative-number-field
      [name]="'Radius'"
      [(value)]="model.radius"
    ></cf-nonnegative-number-field>
  `,
  styleUrls: ['./circle-form.component.scss']
})
export class CircleFormComponent {
  @Input() model: Circle;
}

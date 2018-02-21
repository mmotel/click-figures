import { Component, Input } from '@angular/core';

import { Square } from '../../model';


@Component({
  selector: 'cf-square-form',
  template: `
    <cf-nonnegative-number-field
      [name]="'Side'"
      [(value)]="model.side"
    ></cf-nonnegative-number-field>
  `,
  styleUrls: ['./square-form.component.scss']
})
export class SquareFormComponent {
  @Input() model: Square;
}

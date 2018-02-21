import { Component, OnInit, Input } from '@angular/core';

import { IFigure } from '../../model/figure';


@Component({
  selector: 'cf-figures-form',
  templateUrl: './figures-form.component.html',
  styleUrls: ['./figures-form.component.scss']
})
export class FiguresFormComponent {
  @Input() model: IFigure;
  @Input() figure: string;
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { IFigure } from '../../model/figure';
import { Circle, Triangle, Square } from '../../model';


@Component({
  selector: 'cf-perimeter',
  templateUrl: './perimeter.component.html',
  styleUrls: ['./perimeter.component.scss']
})
export class PerimeterComponent implements OnInit {

  public figure: string;
  public model: IFigure;

  constructor (
    private _activatedRoute: ActivatedRoute
  ) { }

  ngOnInit () {
    this.figure = this._activatedRoute.snapshot.params['figure'];

    const modelsFactory = {
      'circle': Circle,
      'square': Square,
      'triangle': Triangle
    };

    this.model = new modelsFactory[this.figure]();
  }

}

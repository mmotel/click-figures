import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Circle } from './../../model/circle';
import { Square } from '../../model';
import { Triangle } from './../../model';
import { IFigure } from '../../model/figure';


@Component({
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.scss']
})
export class AreaComponent implements OnInit {

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

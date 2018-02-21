import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { IFigure } from '../../model/figure';
import { Circle, Triangle, Square } from '../../model';
import { ModelFactoryService } from './../../service/model-factory.service';


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

    this.model = ModelFactoryService.getFigureModel(this.figure);
  }

}

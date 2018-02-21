import { IFigure } from './../model/figure';
import { Injectable } from '@angular/core';

import { Circle, Square, Triangle } from '../model';

const modelsFactory = {
  'circle': Circle,
  'square': Square,
  'triangle': Triangle
};


@Injectable()
export class ModelFactoryService {

  public static getFigureModel (figure: string): IFigure {
    return new modelsFactory[figure]();
  }
  
}

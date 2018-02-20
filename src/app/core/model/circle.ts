import { IFigure } from './figure';


export class Circle implements IFigure {

    constructor (
        public radius: number = 0
    ) {}

    public area (): number {
        return Math.PI * Math.pow(this.radius, 2);
    }

    public perimeter (): number {
        return 2 * Math.PI * this.radius;
    }
}

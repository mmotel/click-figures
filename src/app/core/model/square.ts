import { IFigure } from './figure';


export class Square implements IFigure {

    constructor (
        public side: number = 0
    ) {}

    public area (): number {
        return Math.pow(this.side, 2);
    }

    public perimeter (): number {
        return 4 * this.side;
    }
}

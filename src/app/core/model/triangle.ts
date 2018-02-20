import { IFigure } from './figure';


export class Triangle implements IFigure {

    constructor (
        public sideA: number = 0,
        public sideB: number = 0,
        public sideC: number = 0
    ) {}

    public area (): number {
        const p = (this.perimeter()) / 2;

        return Math.sqrt(
            p * (p - this.sideA) * (p - this.sideB) * (p - this.sideC)
        );
    }

    public perimeter (): number {
        return this.sideA + this.sideB + this.sideC;
    }
}

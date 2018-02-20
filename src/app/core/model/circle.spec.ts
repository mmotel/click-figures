import { Circle } from './circle';

describe('Circle', () => {
    let circle: Circle;

    describe('defaults', () => {

        beforeEach(() => {
            circle = new Circle();
        });

        it('should create Circle object', () => {
            expect(circle).toBeDefined();
        });

        it('should create Circle object with 0 as radius', () => {
            expect(circle).toBeDefined();
            expect(circle.radius).toEqual(0);
        });

        it('should have area equal to 0', () => {
            expect(circle).toBeDefined();
            expect(circle.area()).toEqual(0);
        });

        it('should have perimeter equal to 0', () => {
            expect(circle).toBeDefined();
            expect(circle.perimeter()).toEqual(0);
        });
    });

    describe('with radius value equal to 1', () => {

        beforeEach(() => {
            circle = new Circle(1);
        });

        it('should create Circle object with 1 as radius', () => {
            expect(circle).toBeDefined();
            expect(circle.radius).toEqual(1);
        });

        it('should have area equal to PI', () => {
            expect(circle).toBeDefined();
            expect(circle.area()).toEqual(Math.PI);
        });

        it('should have perimeter equal to 2 * PI', () => {
            expect(circle).toBeDefined();
            expect(circle.perimeter()).toEqual(2 * Math.PI);
        });
    });
});

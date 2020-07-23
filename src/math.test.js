import { sum, minus, multiply } from './math';

describe('sum function', () => {
    it('should return 3', () => {
        expect(sum(1, 2)).toBe(3);
    });

    it('should return 4', () => {
        expect(sum(2,2)).toBe(4);
    });

    it('should return 5', () => {
        expect(sum(3,2)).toBe(5);
    });

    it('should return 10', () => {
        expect(sum(5,5)).toBe(10);
    });
});



test('Testing if minus is correct', () => {
    expect(minus(4, 2)).toBe(2);
    expect(minus(8, 2)).toBe(6);
    expect(minus(10, 2)).toBe(8);
    expect(minus(0, 2)).toBe(-2);
});

test('Testing if multiply is correct', () => {
    expect(multiply(2, 2)).toBe(4);
});
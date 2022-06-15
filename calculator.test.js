const calculator = require('./calculator');

describe('Calculator Checks:', ()=> {
  describe('Addition: ', () => {
    test('2+3', () => {
      expect(calculator(2, '+', 3)).toBe(5);
    });
    test('100000 + 100000', () => {
      expect(calculator(100000, '+', 100000)).toBe(200000);
    });
    test('10 + -5', () => {
      expect(calculator(10, '+', -5)).toBe(5);
    });
  });
  
  describe('Subtraction', () => {
    test('3-2', () => {
      expect(calculator(3, '-', 2)).toBe(1);
    });
    test('10-5', () => {
      expect(calculator(10, '-', 5)).toBe(5);
    });
    test('-3 - -2', () => {
      expect(calculator(-3, '-', -2)).toBe(-1);
    });
  });

  describe('Multiplication', () => {
    test('1*1', () => {
      expect(calculator(1, '*', 1)).toBe(1);
    });
    test('0.1*0.1', () => {
      expect(calculator(0.1, '*', 0.1)).toBeCloseTo(0.01);
    });
    test('1*-1', () => {
      expect(calculator(1, '*', -1)).toBe(-1);
    });
  });

  describe('Division', () => {
    test('1/-1', () => {
      expect(calculator(1, '/', -1)).toBe(-1);
    });
    test('1/1', () => {
      expect(calculator(1, '/', 1)).toBe(1);
    });
    test('1*0', () => {
      expect(calculator(1, '/', 0)).toBe('can not divide by 0');
    });
  });
});
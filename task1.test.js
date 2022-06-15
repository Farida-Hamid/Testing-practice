const task1 = require('./task1');

test('Count three letters', () => {
  expect(task1('ttt')).toBe(3);
});

test('String is empty', () => {
  expect(task1('')).toBe('the list is empty');
});

test('String is empty', () => {
  expect(task1('12345678910')).toBe('The string is too large');
});
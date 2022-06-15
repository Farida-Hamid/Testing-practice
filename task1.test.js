const task1 = require('./task1');

test('Count three letters: ', () => {
  expect(task1('ttt')).toBe(3);
});
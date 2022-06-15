const cap = require('./cap');

test('Capitalize the first letter', () => {
  expect(cap('italy')).toBe('Italy');
});

test('Number input', () => {
  expect(cap('2ally')).toBe('Can not capitalize a number');
});
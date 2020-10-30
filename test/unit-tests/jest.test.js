const sum = require('./sum');

describe('sum function', () => {
  test('adds 1 + 2 to equal 3', () => {
    // I want my action to fail
    expect(sum(1, 2)).toBe(4);
    //  expect(sum(1, 2)).toBe(3);
  });
});

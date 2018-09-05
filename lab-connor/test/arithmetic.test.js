'use strict';

const arithmetic = require('../lib/arithmetic');

test('Should be called with numbers', () => {
  let actual = arithmetic.add(2, 2);

  expect(actual).toHaveBeenCalledWith(2, 2);
});

test('Should return null if args are NaN', () => {
  let expected = null;
  let actual = arithmetic.add(true, 2);

  expect(actual).toBe(expected);
});
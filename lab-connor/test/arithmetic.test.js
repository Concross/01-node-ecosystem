'use strict';

const arithmetic = require('../lib/arithmetic');

test('Should be called with numbers', () => {
  let actual = [arithmetic.add(2, 2), arithmetic.sub(6, 2)];
  let expected = 4;

  actual.forEach(func => expect(func).toBe(expected));
});

test('Should return null if any args are NaN', () => {
  let expected = null;
  let actual = [arithmetic.add(true, 2), arithmetic.sub(2, true)];

  actual.forEach(func => expect(func).toBe(expected));
});
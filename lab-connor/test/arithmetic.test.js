'use strict';

const arithmetic = require('../lib/arithmetic');

test('Should return 4 when called with 2 and 2', () => {
  let actual = arithmetic.add(2, 2);
  let expected = 4;

  expect(actual).toBe(expected);
});

test('Should return 4 when called with 6 and 2', () => {
  let actual = arithmetic.sub(6, 2);
  let expected = 4;

  expect(actual).toBe(expected);
});

test('Should return null if any args are NaN', () => {
  let add = arithmetic.add;

  expect(add([], 2)).toBeNull();
  expect(add(true, 2)).toBeNull();
  expect(add('4', 2)).toBeNull();
  expect(add(null, 2)).toBeNull();
  expect(add(undefined, 2)).toBeNull();
  expect(add('2', '2')).toBeNull();

});

test('Should return null if any args are NaN', () => {
  let sub = arithmetic.sub;

  expect(sub([], 2)).toBeNull();
  expect(sub(true, 2)).toBeNull();
  expect(sub('4', 2)).toBeNull();
  expect(sub(null, 2)).toBeNull();
  expect(sub(undefined, 2)).toBeNull();
  expect(sub('2', '2')).toBeNull();

});
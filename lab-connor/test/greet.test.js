'use strict';
const greet = require('../lib/greet');

test('Should return null for non-string values', () => {
  let expectedNullValues = [true, 1, {}, [], undefined, null];
  expectedNullValues.forEach(val => expect(greet(val)).toBeNull());
});

test('Should return "hello world"', () => {
  let expected = 'hello world';
  let actual = greet('world');
  expect(actual).toBe(expected);
});
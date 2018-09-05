'use strict';

module.exports = exports = {}

exports.add = (firstNum, secondNum) => {
  if (typeof firstNum !== 'number' || typeof secondNum !== 'number') return null;
  return firstNum + secondNum;
};

exports.sub = (firstNum, secondNum) => {
  if (typeof firstNum !== 'number' || typeof secondNum !== 'number') return null;
  return firstNum - secondNum;
};
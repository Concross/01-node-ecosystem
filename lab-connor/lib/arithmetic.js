'use strict';

module.exports = exports = {}

exports.add = (firstNum, secondNum) => {
  if (!_isParamsValid(firstNum, secondNum)) return null;
  return firstNum + secondNum;
};

exports.sub = (firstNum, secondNum) => {
  if (!_isParamsValid(firstNum, secondNum)) return null;
  return firstNum - secondNum;
};

let _isParamsValid = (first, second) => {
  if (typeof first !== 'number' || typeof second !== 'number') {
    return false;
  }
  return true;
};
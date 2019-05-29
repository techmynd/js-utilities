"use strict";
/*!
 * ----------------------------------------------------------
 * Math
 * ----------------------------------------------------------
 */

// add
let mmAdd = function(a = 0, b = 0) {
  return a + b;
};

// multiply
let mmMultiply = function(a = 0, b = 0) {
  return a * b;
};

// deduct
let mmDeduct = function(a = 0, b = 0) {
  return a - b;
};

// power
let mmPower = function(a = 0, b = 0) {
  return a ** b;
};

// Division
let mmDivide = function(a = 0, b = 0) {
  return a / b;
};

// Percent
let mmPercent = function(a = 0, b = 0) {
  return (a * b) / 100;
};

const mmCalc = function(calcFunc, num1, num2) {
  return calcFunc(num1, num2);
};

// usage
// let result = mmCalc(mmPercent, 500, 10);
// console.log(result);

/*!
 * ----------------------------------------------------------
 * N number of Math by using rest parameter
 * its not spread operator here
 * 'spread operator' as an argument is a 'rest parameter'
 * ----------------------------------------------------------
 */

// add all numbers
let mmAddAll = function(...allnums) {
  let sum = 0;
  for (let i = 0; i < allnums.length; i++) {
    //sum = sum + allnums[i];
    sum += allnums[i];
  }
  return sum;
};

// usage
// let result = mmAddAll(1, 2, 3, 4, 5);
// console.log(result);

// multiply all numbers
let mmMultiplyAll = function(...allnums) {
  let res = 0;
  for (let i = 0; i < allnums.length; i++) {
    // res = res * allnums[i];
    res *= allnums[i];
  }
  return res;
};

// usage
let result = mmMultiplyAll(2, 2, 2, 2, 2);
console.log(result);

/*!
 * ----------------------------------------------------------
 * Spread Operator
 * ----------------------------------------------------------
 */

// Spread into array items
const mmSpread = function(a = "") {
  return [...a];
};

// usage
// let result = mmSpread("universe");
// console.log(result);

/*!
 * ----------------------------------------------------------
 * Convert Array into Object via spread operator
 * ----------------------------------------------------------
 */

const mmObj = function(a = "") {
  return { ...a };
};

// usage
// let result = mmObj("universe");
// console.log(result);

/*!
 * ----------------------------------------------------------
 * Merge Array into single Array via spread operator
 * ----------------------------------------------------------
 */

const mmMergeArray = function(a = [], b = []) {
  return [...a, ...b];
};

// usage
// let result = mmMergeArray([1, 2, 3], [4, 5, 6]);
// console.log(result);

/*!
 * ----------------------------------------------------------
 * Merge Objects into single New Object via spread operator
 * This will overide keys values if found duplicate
 * old value in an object will be overidden by new value in second object if key is same
 * ----------------------------------------------------------
 */

const mmMergeObj = function(a = {}, b = {}) {
  return { ...a, ...b };
};

// usage
// let result = mmMergeObj(
//   { Name: "John", Age: 20 },
//   { Email: "john@msn.com", Age: 40 },
// ); // 40 will replace 20 in merging process
// console.log(result);

const add = function(num1, num2) {
	return num1 + num2
};

const subtract = function(num1, num2) {
	return num1 - num2
};

const sum = function(array_num) {
  let sum = 0
  for (let num of array_num){
    sum += num
  }
  return sum
};

const multiply = function(array_num) {
  let product = 1
  for (let num of array_num){
    product *= num
  }
  return product
};

const power = function(num1, num2) {
  return num1 ** num2
};

const factorial = function(num) {
  let result = 1
  for (let i = 2; i <= num; i++){
    result *= i
  }
  return result
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};

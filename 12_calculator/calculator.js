const add = function(a, b) {
	return a + b;
};

console.log(add(0, 0));
console.log(add(2, 2));
console.log(add(2, 6));

const subtract = function(a, b) {
	return a - b;
};

console.log(subtract(10, 4));
console.log(subtract(-10, -4));
console.log(subtract(-8, 7));

const sum = function(numbers) {
  let total = 0;
  for (let i = 0; i < numbers.length; i++) {
    total = total + numbers[i];
  };

  return total;
};

console.log([]);
console.log([7]);
console.log([7, 11]);
console.log([1, 3, 5, 7, 9]);

const multiply = function(numbers) {
  let total = 1;
  for (let i = 0; i < numbers.length; i++) {
    total = total * numbers[i];
  };

  return total;
};

console.log([2, 4]);
console.log([2, 4, 6, 8, 10, 12, 14]);

const power = function() {
	
};

const factorial = function() {
	
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

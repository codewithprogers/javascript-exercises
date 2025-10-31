const sumAll = function(numA, numB) {
  let sum = 0;
  if(Math.min(numA, numB) < 0 || typeof numA !== "number" || typeof numB !== "number" || !Number.isInteger(numA) ||!Number.isInteger(numB)) return "ERROR";
  for(let i = Math.min(numA, numB); i <= Math.max(numA, numB); i++) {
    sum = sum + i;
  }
  return sum;
};

sumAll(2, 4);
sumAll(1, 4000);
sumAll(123, 1);
sumAll(-10, 4);
sumAll(2.5, 4);
sumAll(10, "90");
sumAll(10, [90, 1]);

// Do not edit below this line
module.exports = sumAll;

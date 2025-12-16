const fibonacci = function(number) {
  let first = 1;
  let second = 1;

  number = Number(number);

  if (number < 0 ) {
    return "OOPS";
  } else if (number === 0) {
    return 0;
  };

  for (let i = 2; i < number; i++) {
    let next = first + second;
    first = second;
    second = next;
  };

  return second;
};

fibonacci(4);
fibonacci(6);
fibonacci(10);
fibonacci(15);
fibonacci(25);
fibonacci(0);
fibonacci(-25);
fibonacci("0");
fibonacci("1");
fibonacci("2");
fibonacci("8");

// Do not edit below this line
module.exports = fibonacci;

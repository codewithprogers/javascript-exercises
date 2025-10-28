const repeatString = function(string, num) {
  if(num < 0) return "ERROR";
  let res = "";
  for (let i = 0; i < num ; i++) {
    const number = Math.floor(Math.random() * 999);
    res += string;
  }
  return res;
};

repeatString('hey', 3);
repeatString('hello', 10);
repeatString('hi', 1);
repeatString('bye', 0);
repeatString('goodbye', -1);
repeatString('', 10);




// Do not edit below this line
module.exports = repeatString;

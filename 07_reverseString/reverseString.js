// const reverseString = function(word) {
//   let charArray = word.split('');
//   charArray.reverse();
//   return charArray.join('');
// };

const reversString = function(string) {
  return string.split("").reverse().join("");
}

reverseString('hello');
reverseString('hello there');
reverseString('123! abc! Hello, Odinite.');
reverseString('');

// Do not edit below this line
module.exports = reverseString;

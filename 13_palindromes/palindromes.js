const palindromes = function (word) {
  const lower = word.toLowerCase();
  let cleaned = "";
  for (let i = 0; i < lower.length; i++) {
    let char = lower[i];
    if ("a" <= char && char <= "z" || "0" <= char && char <= "9") {
      cleaned = cleaned + char
    };
  };
  let reversed = [...cleaned].reverse().join("");
  return cleaned === reversed; 
};

console.log(palindromes('racecar'));
console.log(palindromes('racecar!'));
console.log(palindromes('Racecar!'));
console.log(palindromes('A car, a man, a maraca.'));
console.log(palindromes('Animal loots foliated detail of stool lamina.'));
console.log(palindromes('ZZZZ car, a man, a maracaz.'));
console.log(palindromes('rac3e3car'));
console.log(palindromes('r3ace3car'));

// Do not edit below this line
module.exports = palindromes;

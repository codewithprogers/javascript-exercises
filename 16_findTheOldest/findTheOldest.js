const people = [
  {
    name: "Carly",
    yearOfBirth: 2018,
    yearOfDeath: 1970,
  },
  {
    name: "Ray",
    yearOfBirth: 1962,
    yearOfDeath: 2011,
  },
  {
    name: "Jane",
    yearOfBirth: 1912,
    yearOfDeath: 1941,
  },
]

const findTheOldest = function(arr) {
  return arr.reduce((first, current) => {
    let oldestAge = first.yearOfDeath - first.yearOfBirth;
    let currentAge = current.yearOfDeath - current.yearOfBirth;
    
    if (currentAge > oldestAge) {
      return current;
    } else {
      return first;
    }
  }, arr[0]);
};

console.log(findTheOldest(people).name);



// Do not edit below this line
module.exports = findTheOldest;

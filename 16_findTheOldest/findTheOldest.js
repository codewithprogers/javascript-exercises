const people = [
  {
    name: "Carly",
    yearOfBirth: 2018,
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
    let firstPersonEndYear = first.yearOfDeath || ((new Date()).getFullYear());
    let currentPersonEndYear = current.yearOfDeath || ((new Date()).getFullYear());

    let oldestAge = firstPersonEndYear - first.yearOfBirth;
    let currentAge = currentPersonEndYear - current.yearOfBirth;
    
    return oldestAge < currentAge ? current : first;
  }, arr[0]);
};

console.log(findTheOldest(people).name);



// Do not edit below this line
module.exports = findTheOldest;

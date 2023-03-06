// The find() method returns the value of the first element that passes a test.

const arr = [7, 6, 2, 4, 2, 5, 6];

// array.find(function(currentValue, index, arr),thisValue)

let repeatingElement = arr.find((element, index) => arr.indexOf(element) !== index);

// The indexOf() method returns the first index (position) of a specified value.

console.log(repeatingElement);
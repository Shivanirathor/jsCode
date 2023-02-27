// Cyclically rotate an array by one

// const arr = [1,2,3,4,5];
const arr = [9, 8, 7, 6, 4, 2, 1, 3];

// arr.shift();
// console.log(arr);
const last = arr[arr.length - 1];
arr.splice(0, 0, last);
// const get = arr.slice(0,4);
arr.pop();
console.log(arr);
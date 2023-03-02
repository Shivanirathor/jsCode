const arr = [1, 2, 7, 4, 4, 2, 1, 3];

arr.shift();
// console.log(arr);
const last = arr[arr.length - 1];
arr.splice(0, 0, last);

arr.pop();
console.log(arr);

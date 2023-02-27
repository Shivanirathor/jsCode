const arr1 = [1, 2, 3, 4, 5];
const arr2 = [6, 7, 8, 9, 10];

const result = arr1.concat(arr2);

// result.sort((a,b)=>a-b);
// console.log(result);
result.sort((a, b) => b - a);
console.log(result);


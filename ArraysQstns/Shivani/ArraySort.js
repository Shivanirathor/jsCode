
const arr1 = [22,4,1,6,4];
const arr2 = [6,4,2,8,4];

// let result = arr1+" "+ arr2;

// for printing array we use concat
const result = arr1.concat(arr2);
//  console.log(result);

result.sort((a,b)=>a-b);
// result.sort((a,b)=>b-a);

console.log(result);
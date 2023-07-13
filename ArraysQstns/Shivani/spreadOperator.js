const arr1 = [22,4,1,6,4];
const arr2 = [6,4,2,8,4];


// spread(expand) operator hv to read
// allows us to quickly copy all or part of an
//  existing array or object into another array or object.

const result1= [...arr1,...arr2];
console.log(result1);

console.log(...arr1)
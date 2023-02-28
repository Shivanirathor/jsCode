const arr1 = [3,2,2, 2, 2,1,1,5,3]; 
 const arr2 = [3,2,1,5,3]; 

 const arr3 = [...arr1,...arr2]
// removes duplicate elements
const set1 = new Set(arr3); 
console.log([...set1])
console.log(...arr3);
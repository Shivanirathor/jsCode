const a =[1,2,3,4];
const b =[3,5,4,6];

//  let intersection = arr1.filter(x => arr2.includes(x));

//  console.log(intersection);

const interSection = a.filter((element) => b.includes(element));      // includes means it'll return true if sting contains a specified string else false
  

console.log(interSection);

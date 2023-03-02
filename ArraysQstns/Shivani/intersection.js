const arr1 = [3,2,2, 2, 2,1,1,5,3]; 
 const arr2 = [3,2,1,5,3]; 

 let intersection = arr1.filter(x => arr2.includes(x));

 
 console.log(intersection);
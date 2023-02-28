const a =[1,2,3];
const b =[3,5,6];

// function intersect(a, b) {
//     var setA = new Set(a);
//     var setB = new Set(b);
//     var intersection = new Set([...setA].filter(x => setB.has(x)));
//     return Array.from(intersection);
//   }

// function intersect(a, b) {
//     var setB = new Set(b);
//     return [...new Set(a)].filter(x => setB.has(x));
//   }

// const result = arrA.filter(e=>e.includes(arrB));

//   console.log(result);

// Return elements of array a that are also in b in linear time:

// function intersect(a, b) {
//     return a.filter(Set.prototype.has, new Set(b));
    
//   }
  
//   // Example:
//   console.log(intersect([1,2,3], [2,3,4,5]));

  const filteredArray = a.filter(element => b.includes(element));

  console.log(filteredArray);
const arr = [3, 6, "hi", 4, "hello"];

//     for(let i=0; i<arr.length; i++){
//         if(typeof(arr[i])==='number'){
//         // console.log(arr[i]==='number');
//         arr1.push(arr[i]);
//         }else{
//         // console.log(arr[i]==='string');
//         arr2.push(arr[i]);
//     }
// }

// console.log(arr1, arr2);

const separatedNumberAndString = (arr) => {
  let arr1 = [];
  let arr2 = [];
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "string") {
      arr1.push(arr[i]);
    } else {
      arr2.push(arr[i]);
    }
  }
  return [arr1, arr2];
};
console.log(separatedNumberAndString(arr));

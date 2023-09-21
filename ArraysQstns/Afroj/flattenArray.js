let arr = [1, 2, [3, 2]];
// show this array in a single array
let arr2 = [];
// console.log(...arr[2]);

// step1;
// console.log(arr.flat());

// step2;
// const arr2 = [].concat(...arr);
// console.log(arr2);

step3;
for (let i = 0; i < arr.length; i++) {
  if (Array.isArray(arr[i])) {
    console.log("is Array");
    arr2.push(...arr[i]);
  } else {
    console.log("not array");
    arr2.push(arr[i]);
  }
}
console.log(arr2);

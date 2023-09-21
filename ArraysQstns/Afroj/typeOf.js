let array = [1, 2, [3, 2], { hey: "hi" }, true, "name"];

// [num, num, arr, obj, boolean, string ]

//using arrow function and map

// const typesArray = array.map((e) => {
//   if (Array.isArray(e)) {
//     return "array";
//   } else {
//     return typeof e;
//   }
// });
// console.log(typesArray);

//using for loop

for (let i = 0; i < array.length; i++) {
  if (Array.isArray(array[i])) {
    console.log("array");
  } else {
    console.log(typeof array[i]);
  }
}
console.log(array);

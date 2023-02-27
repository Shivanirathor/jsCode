let a = "2,3,2,6";

// split converts string to array 
// join converts array to string 

const splitNumber = a.split(",");
console.log(splitNumber)
// const joinNumber = splitNumber.join("")
// console.log(joinNumber)

// for (let i = 0; i < splitNumber.length; i++) {
//   if (!Number(splitNumber[i])) {
//     console.log(false);
//   } else {
//     console.log(true);
//   }
// }

const validNo=(splitNumber) => {
  for (let i = 0; i < splitNumber.length; i++) {
    if (!Number(splitNumber[i])) {
      return false;
    }
  }
  return true;
}
console.log(validNo(splitNumber));


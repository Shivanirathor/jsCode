const arr = [7, 10, 4, 3, 20, 15];
// const plusOne=(num)=>{
//  return num+2;
// }
// const mapNumber = arr.map(plusOne);

//anonymous function
const mapNumber = arr.map((num) => {
  //   return num % 2 === 0 ;
  return num%2;
});
console.log(mapNumber);
const filterNo = arr.filter((num) => {
  // return true value
  return num - 10;
});

console.log(filterNo);

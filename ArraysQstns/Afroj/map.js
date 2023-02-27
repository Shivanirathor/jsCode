// mapping

const arr = [7, 10, 4, 3, 20, 15];
// const plusOne=(num)=>{
//     return num+1;
// }
// const mapNumber = arr.map(plusOne);


//here arr.map is an anonymous function
const mapNumber = arr.map((num) => {
    return num % 2 ? 1 : 0;
    // reverse of the desired output
});
console.log(mapNumber);

const filterNo = arr.filter((num) => {
    return num % 2 === 0;
});
console.log(filterNo);
const Array = [12, 5, 8, 10, 130, 44];

const includesNumindex0 = Array.includes(12,0);
const includesNumberindex1 = Array.includes(12,1);

console.log(includesNumindex0);
console.log(includesNumberindex1);

const sortedArray = Array.sort((a, b) => a - b);
console.log(sortedArray);

function biggerThanTen(value) {
    return value > 10;
  }
  const filtered = Array.filter(biggerThanTen);
  console.log(filtered);
  

  const squareMap = Array.map((num) => (2 * num));
  console.log(squareMap);

  const initialValue = 0;
  const sumWithInitial = Array.reduce((addValue, currentValue) => addValue + currentValue,initialValue);
  console.log(sumWithInitial);

  const numbers = [1,2,"Afroj","shivani","shaily","harish","vishal",5,10];
//   const numbers = [1,2,3,4,5,66];
  const sumnumbers = numbers.reduce((total, item) => total +" "+ item,2); //hello is initial value
  console.log(sumnumbers);
//   console.log("name" + 2); 
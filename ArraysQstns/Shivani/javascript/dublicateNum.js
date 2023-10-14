// 1- qstn find dublictae num
// = filter- it returns the matched value in an array from the collection
//  it return new array,  filter() method does not change the original array.

// const arrNum = [1,3,2,1,1,3,5];
// console.log(arrNum.indexOf(1));
// console.log(arrNum.indexOf(3));
// console.log(arrNum.indexOf(1));
// const dublicate = arrNum.filter((ele,index,arr)=>arr.indexOf(ele) !== index)
// console.log(dublicate)


// 2-qstn find max num 
// reduce() method takes two arguments: a callback function and an initial value.
// callback function returns a new value,

// const arrMaxNum = [1,32,2,21,1,3,5];
// const maxNum =(arr)=>{
//     return arr.reduce(function(prev,curr){
//         return prev> curr ? prev : curr;
//     })
// }
// console.log(maxNum(arrMaxNum))



//3-qstn find min num
// const arrMinNum = [19,32,2,21,15,3,5];
// const minNum =(arr)=>{
//     return arr.reduce(function(prev,curr){
//         return prev< curr ? prev : curr;
//     })
// }
// console.log(minNum(arrMinNum))



// 4-find 2nd largest value
// let intArray= [60,78,-10,23] 
// const largestVal =(arr)=>{
//     firstLargestVal=Math.max(...arr)
//     index=arr.indexOf(firstLargestVal)
//     arr.splice(index,1)
//     secondLargestVal=Math.max(...arr)
//     return(secondLargestVal)
// }
// console.log(largestVal(intArray));



// qstn 5- find missing number
// const arrNumber = [1,2,3,4,6,7,8,10]
// const missArray=[];
// const missingValue=(arr)=>{
//     const minValue = Math.min(...arr)
//     const maxValue = Math.max(...arr)
//     for (let i = minValue; i <= maxValue; i++) {
//    if(arr.indexOf(i)<0){
//     missArray.push(i);
//    }
//     }
//     return(missArray);
// }
// console.log(missingValue(arrNumber))

// 6- find odd and even no
// const num=[1,2,3,4,5,6,7,8,9,10]
// const oddNum=num.filter((item)=>{
//     // return item%2 === 0
//     return item%2 !== 0
// })
// // console.log("even mum",oddNum)
// console.log("odd mum",oddNum)


// 7 find the sum of all elements in an array
// const sumArr=[1,2,3,4,5,6,7,8,9,10]
// const sumOfArray=sumArr.reduce((prev,curr)=>{
//     return prev+curr
// })
// console.log(sumOfArray);


// 8 find factorial(n!) of given in num
// const inputNumber = prompt("please enter number") //prompt not define
// const inputNumber = 3
// var facto = 1;
//  if(inputNumber < 0){
//     console.log("factorial is not valid for this number")
//  }else{
//      for(let i=1; i<=inputNumber; i++){
//         facto = facto*i;
//      }
//      console.log(facto)
//  }


//  9-find prime number
const primeNum = 89
if(primeNum===1){
    console.log('number is not prime')
}else {
    for(let i=2; i<primeNum; i++){
        if(primeNum % i === 0){
            var result=`${primeNum} is not a prime number`
        }else{
            var result=`${primeNum} is a prime number`

        }
    }
    
    console.log(result)
}
// 1- qstn find dublictae num
// = filter- it returns the matched value in an array from the collection
//  it return new array,  filter() method does not change the original array.
const arrNum = [1,3,2,1,1,3,5];
console.log(arrNum.indexOf(1));
console.log(arrNum.indexOf(3));
console.log(arrNum.indexOf(1));
const dublicate = arrNum.filter((ele,index,arr)=>arr.indexOf(ele) !== index)
console.log(dublicate)


// 2-qstn find max num 
// reduce() method takes two arguments: a callback function and an initial value.
// callback function returns a new value,
const arrMaxNum = [1,32,2,21,1,3,5];
const maxNum =(arr)=>{
    return arr.reduce(function(prev,curr){
        return prev> curr ? prev : curr;
    })
}
console.log(maxNum(arrMaxNum))



//3-qstn find min num
const arrMinNum = [19,32,2,21,15,3,5];
const minNum =(arr)=>{
    return arr.reduce(function(prev,curr){
        return prev< curr ? prev : curr;
    })
}
console.log(minNum(arrMinNum))



// 4-find 2nd largest value
let intArray= [60,78,-10,23] 
const largestVal =(arr)=>{
    firstLargestVal=Math.max(...arr)
    index=arr.indexOf(firstLargestVal)
    arr.splice(index,1)
    secondLargestVal=Math.max(...arr)
    return(secondLargestVal)
}
console.log(largestVal(intArray));



// qstn 4- find missing number
const arrNumber = [1,2,3,4,6,7,8,10]
const missArray=[];
const missingValue=(arr)=>{
    const minValue = Math.min(...arr)
    const maxValue = Math.max(...arr)
    for (let i = minValue; i <= maxValue; i++) {
   if(arr.indexOf(i)<0){
    missArray.push(i);
   }
    }
    return(missArray);
}
console.log(missingValue(arrNumber))
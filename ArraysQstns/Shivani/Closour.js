// let number = 1;

// const increaseNumber=()=>{
//     let number = 5;
//     console.log(number);
//     return number+1;

// }
// // console.log(increaseNumber());
// // console.log(increaseNumber());
// increaseNumber();
// increaseNumber();
// console.log(number);

const add =(()=>{
    let counter = 0;
    return ()=>{
        counter += 1;
        return counter; 
    }
})();
console.log(add());
console.log(add());
console.log(add());
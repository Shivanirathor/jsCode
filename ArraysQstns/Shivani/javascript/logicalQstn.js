// qstn -1
// function fruit(){
//     console.log(name);
//     console.log(price);

//     var name = "mango";
//     let price = 100;
// }
// fruit();

// qstn - 2 ask
// for(var i=0; i<3; i++){
//     setTimeout(()=>console.log(i),1);
// }

// qstn -3
// for(let i=0; i<3; i++){
//     setTimeout(()=>console.log(i),1);
// }

// qstn -4
// console.warn(+true);     //if we r usinf + before string or boolean so it will convert into num
// console.warn(typeof +true);

// qstn -5
// console.log(!"shivani")
// console.log(typeof("shivani"))

// qstn -6  ask
// let data = "number"
// const num = {
//     value: 'hello',
// }
// // num object does not hv a property with the key "number", so the result will be undefined.
// console.log(num[data])
// console.log(num["number"])
// console.log(num.value);
// console.log(num.data)

// qstn -7 
// let c = {
//     name: "shivu",
// }
// let d;

// d = c;
// d.name = "shivani";
// console.log(d.name);

// qstn -8

// let a = 4;
// let b = new Number(4);  // b is object
// console.log(typeof b)
// console.log(a == b);
// console.log(a === b)

// qstn -9
// let name;
// name = {};
// console.log(name)

// qstn - 10
// function foo(){
//     console.log("first");
// }
// foo.name = "my"  // if we assign any extra property so itll not effec on code
// foo();

// qstn - 11
// function sum(a,b){
//     return a+b;
// }
// console.log(sum(2, "3"))

// qstn - 12
// let num = 0
// console.log(num++);
// console.log(++num);
// console.log(num);

// qstn-13
// function getAge(...args){
//     console.log(args)
// }
// getAge(22)

//  qstn-14
// function getAge(){
//     //  'use strict';
//      age =  22;
//     console.log(age)
// }
// getAge();

// qstn-15
const sum = eval(10*3+3);
console.log(sum);
console.warn('first')
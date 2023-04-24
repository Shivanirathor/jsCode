// ase is the sum of all the elements of the array: 3 + 2 + 3 + 4 + 8 = 20.

let a = [3,2,3,4,,10,8]
let result = a.reduce((n,m)=>{
    return m+n;
})
console.log(result)
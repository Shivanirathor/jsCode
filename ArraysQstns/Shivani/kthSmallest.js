const arr = [7, 10, 4, 3, 20, 15]; 
const K = 3
// arr.sort((a,b) => a-b);
// console.log(arr);

// console.log(arr[K-1]);

// function ktSmallest(arr, K){
//     arr.sort((a,b) => a-b);
//     return arr[K-1];
// }

// arrow function

const ktSmallest=(arr, K)=>{
    arr.sort((a,b) => a-b);
    return arr[K-1];
}

console.log(ktSmallest(arr, K));

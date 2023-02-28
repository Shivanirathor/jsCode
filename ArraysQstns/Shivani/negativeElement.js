const arr = [-12, 11, -13, -5, 6, -7, 5, -3, -6];

const negElement=(arr)=>{
    let result = [];
    for(let i=0; i<arr.length; i++){
        if(arr[i] < 0){
            result.push(arr[i]);
        }
    }
    for(let i=0; i<arr.length; i++){
        if(arr[i] >0){
            result.push(arr[i]);
        }
    }
    return result;
}

console.log(negElement(arr));

const arr = [1,2,'name','age'];

let arr1=[];
let arr2=[];

for(i=0;i<arr.length;i++){
    if(typeof(arr[i])==='string'){
        arr1.push(arr[i]);
    }else{
        arr2.push(arr[i]);
    }
}

console.log(arr1,arr2);



const arr = [1, 4, 0, 0, 3, 10, 5];
const sum = 7;

const findSubarray=(arr, sum)=>{
  for (let i=0; i<arr.length; i++){
    let CurrentSum = arr[i];
    if(CurrentSum == sum){
        console.log("sum found at index" + i);
        break;
    }else{
        for(let j=1+i; j<arr.length; j++){
            CurrentSum = CurrentSum + arr[j];
            if(CurrentSum == sum){
                console.log("sum found at index" + i +" and "+ j);
                break;
            }
        }
    }
  }
  console.log("No subarray found");
}
console.log(findSubarray(arr, sum));

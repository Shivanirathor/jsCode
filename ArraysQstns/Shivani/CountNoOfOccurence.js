const arr = [1, 1, 2, 2, 2, 2, 3];
const arr1 = [1, 1,2, 2, 2, 2, 2, 3];
  const k = 2;

  const noOfOccurence=(arr,k)=>{
     let count = 0;
     for(let i=0; i<arr.length; i++){
         if(k == arr[i]){
            count++;
         }
     }
     return count;
  }

 console.log(noOfOccurence(arr,k));  // main part
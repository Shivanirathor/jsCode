const arr = [1, 4, 0, 0, 3, 10, 5, 2];
const sum = 7;

const findSubarray = (arr, sum) => {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    let CurrentSum = arr[i];
    if (CurrentSum == sum) {
      // console.log("sum found at index" + i);
      result.push("sum found at index" + i);
      break;
    } else {
      for (let j = 1 + i; j < arr.length; j++) {
        CurrentSum = CurrentSum + arr[j];
        if (CurrentSum == sum) {
          // console.log("sum found at index" + i +" and "+ j);
          result.push("sum found at index" + i + " and " + j);
          break;
        }
      }
    }
  }
  return result.length ? result[0] : "No subarray found";
};
console.log(findSubarray(arr, sum));

function countZerosOnes(arr) {
    let zeros = 0;
    let ones = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            zeros++;
        } else if (arr[i] === 1) {
            ones++;
        }
    }

    return { zeros, ones };
}

const binaryArray = [0, 1, 0, 0, 1, 1, 0, 1];
const { zeros, ones } = countZerosOnes(binaryArray);
console.log(countZerosOnes(binaryArray));
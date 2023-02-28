const arr = [-12, 11, -13, -5, 0, 6, -7, 5, -3, -6];

const negElement = (arr) => {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            result.push(arr[i]);
        }
    }
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= 0) {
            result.push(arr[i]);
        }
    }
    result.sort((a, b) => a - b);
    return result;

}

console.log(negElement(arr));
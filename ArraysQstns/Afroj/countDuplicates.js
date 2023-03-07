const arr = [1, 5, 3, 4, 3, 5, 6];


function countRepeatedElements(arr) {
    const freq = {};
    for (let num of arr) {
        if (num in freq) {
            freq[num]++;
        } else {
            freq[num] = 1;
        }
    }

    const repeated = [];
    for (let num in freq) {
        if (freq[num] > 1) {
            repeated.push([parseInt(num), freq[num]]);
        }
    }

    repeated.sort((a, b) => a - b);
    for (let [num, count] of repeated) {
        console.log(num, count);
    }
}
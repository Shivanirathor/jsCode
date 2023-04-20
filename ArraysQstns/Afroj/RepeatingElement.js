// First Repeating Element

const arr = [1, 5, 3, 4, 3, 5, 6];

const result = () => {
    for (i = 0; i < arr.length; i++) {
        const check = arr[i];
        for (let j = i + 1; j < arr.length; j++) {
            if (check == arr[j]) {
                return arr[i];
            }

        }
    }
}
console.log(result());


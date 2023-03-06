function calculate(operation) {
    function sum(num1, num2) {
        const result = num1 + num2;
        // console.log(result);
        console.log(`${num1} + ${num2} = ${result}`);
    }
    function difference(num1, num2) {
        const result = num1 - num2;
        // console.log(result);
        console.log(`${num1} - ${num2} = ${result}`);
    }

    if (operation.toUpperCase() === 'ADD') {
        return sum;
    } else if (operation.toUpperCase() === 'SUBTRACT') {
        return difference;
    }
}

calculate("ADD")(5, 4);
calculate("SUBTRACT")(5, 4);


function calculate(operation) {
    if (operation === "ADD") {
        return ((a, b) => {
            const result = a + b;
            console.log(`${a} + ${b} = ${result}`);
        });
    } else if (operation === "SUBTRACT") {
        return ((a, b) => {
            const result = a - b;
            console.log(`${a} - ${b} = ${result}`);
        });
    }
}

calculate("ADD")(6, 4);
calculate("SUBTRACT")(6, 4);
// approach 1
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
// when a func retun func is called higher order func
// first () is returning a function definition 
// first () is for 1st func and 2nd () is for 2nd func (which is inside 1st func as per the definition of higher order func)
calculate("SUBTRACT")(5, 4);

// approach 2
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

// }) () IIFE immediately invoked 
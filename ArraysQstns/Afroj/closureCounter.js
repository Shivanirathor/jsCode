// assignment question

function countBy(initialCount, incrementBy) {
    let count = initialCount;

    return function () {
        count = count + incrementBy;
        // console.log(count);
        return count;
    }
}

const result = countBy(2, 2);

console.log(result());

/*
Concept used: closure and currying
*/
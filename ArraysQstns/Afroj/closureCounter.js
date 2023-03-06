// assignment question

function countBy(initialCount, incrementBy) {
    let count = initialCount;

    return function () {
        count = count + incrementBy;
        console.log(count);
        return count;
    }
}

countBy((2,2));
// countBy(2,-2);


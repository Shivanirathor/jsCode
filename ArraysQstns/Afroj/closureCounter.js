function countBy(initialCount, incrementBy) {
    let count = initialCount;

    return function () {
        count = count + incrementBy;
        return count;

    }

}
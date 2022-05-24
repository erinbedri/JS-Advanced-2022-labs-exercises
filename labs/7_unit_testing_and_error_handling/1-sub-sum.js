function subSum(array, startIndex, endIndex) {
    if (!Array.isArray(array)) {
        return NaN;
    }
    if (startIndex < 0) {
        startIndex = 0;
    }
    if (endIndex > array.length - 1) {
        endIndex = array.length - 1;
    }

    let sum = 0;

    array.slice(startIndex, endIndex + 1).forEach(number => {
        sum += Number(number);
    });

    return sum;
}

console.log(subSum([10, 'twenty', 30, 40], 0, 2))
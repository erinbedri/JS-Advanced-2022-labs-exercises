function extract(array) {
    let currentBiggestNumber = -Math.pow(10, 1000);
    let subset = [];

    for (number of array) {
        if (number >= currentBiggestNumber) {
            currentBiggestNumber = number;
            subset.push(number);
        }
    }
    
    return subset;
}

console.log(extract([1, 3, 8, 4, 10, 12, 3, 2, 24]))
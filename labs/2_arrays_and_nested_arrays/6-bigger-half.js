function biggerHalf(input) {
    let result = [];

    input.sort((a, b) => a - b);

    result = input.slice(Math.floor(input.length / 2));

    return result;
}

console.log(biggerHalf([4, 7, 2, 1, 5]))
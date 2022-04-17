function solve(input) {
    let result = [];

    for (i = 0; i < input.length; i++) {
        if (input[i] < 0) {
            result.unshift(input[i]);
        } else {
            result.push(input[i]);
        }
    }

    for (i = 0; i < input.length; i++) {
        console.log(result[i])
    }
}

solve([3, -2, 0, -1])

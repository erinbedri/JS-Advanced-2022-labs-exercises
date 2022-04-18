function biggest(matrix) {
    // get min possible number
    let result = -Math.pow(10, 1000);

    for (array of matrix) {
        for (number of array) {
            if (number > result) {
                result = number;
            }
        }
    }
    return result;
}

console.log(biggest([[20, 50, 10],
                    [8, 33, 145]]
                    ))

console.log(biggest([[3, 5, 7, 12],
                    [-1, 4, 33, 2],
                    [8, 3, 0, 4]]
                    ))
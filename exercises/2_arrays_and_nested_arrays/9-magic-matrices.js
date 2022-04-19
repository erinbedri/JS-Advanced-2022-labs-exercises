function solve(matrix) {
    let comparisonCriteria = [];
    let outcome = true;

    for (row = 0; row < matrix.length; row++) {
        let rowSum = 0;

        for (col = 0; col < matrix[row].length; col++) {
            rowSum += matrix[row][col];
        }
        comparisonCriteria.push(rowSum);
    }

    for (row = 0; row < matrix.length; row++) {
        let colSum = 0;

        for (col = 0; col < matrix.length; col++) {
            colSum += matrix[col][row];
        }
        comparisonCriteria.push(colSum);
    }

    for (sum of comparisonCriteria) {
        if (sum !== comparisonCriteria[0]) {
            outcome = false;
        }
    }

    return outcome;
}

console.log(solve(
    [
        [4, 5, 6],
        [6, 5, 4],
        [5, 5, 5]
    ]
   ))

console.log(solve(
    [
        [11, 32, 45],
        [21, 0, 1],
        [21, 1, 1]
    ]
   ))
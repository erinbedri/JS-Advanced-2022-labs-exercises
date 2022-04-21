function solve(input) {
    let matrix = [];
    let primaryDiagonalSum = 0;
    let secondaryDiagonalSum = 0;

    // Parse input to matrix of numbers
    for (let i = 0; i < input.length; i++) {
        matrix.push(input[i].split(' ').map(Number));
    }

    // Calculate sum of primary and secondary diagonals
    for (let i = 0; i < matrix.length; i++) {
        primaryDiagonalSum += matrix[i][i];
        secondaryDiagonalSum += matrix[i][matrix.length - 1 - i];
    }

    // All cells not belonging to a primary and secondary diagonals are changed to the diagonal sum
    if (primaryDiagonalSum === secondaryDiagonalSum) {
        for (let i = 0; i < matrix.length; i++) {
            for (let j = 0; j < matrix.length; j++) {
                if ((j !== i) && (j !== matrix.length - 1 - i)) {
                    matrix[i][j] = primaryDiagonalSum;
                }
            }
        }
    }

    matrix.forEach(row => {
        console.log(row.join(' '))
    });
}

solve(['5 3 12 3 1', '11 4 23 2 5', '101 12 3 21 10', '1 4 5 2 2', '5 22 33 11 1'])
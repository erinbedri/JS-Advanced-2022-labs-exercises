function equalNeighbors(matrix) {
    let result = 0;

    for (let row = 0; row < matrix.length - 1; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
            if (matrix[row][col] === matrix[row + 1][col]) {
                result += 1;
            } if (matrix[row][col] === matrix[row][col + 1]) {
                result += 1;
            }
        }
    }

    for (let col = 0; col < matrix[0].length; col++) {
        if (matrix[matrix.length - 1][col] === matrix[matrix.length - 1][col + 1]) {
            result += 1;
        }
    }

    return result;
}

console.log(equalNeighbors(
    [
        ['2', '2', '5', '7', '4'],
        ['4', '0', '5', '3', '4'],
        ['2', '5', '5', '4', '2'],
    ]
))

console.log(equalNeighbors(
    [
        ['test', 'yes', 'yo', 'ho'],
        ['well', 'done', 'yo', '6'],
        ['not', 'done', 'yet', '5']
    ]
))
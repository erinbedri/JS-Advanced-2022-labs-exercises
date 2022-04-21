function solve(x, y) {
    let result = [];
    let counter = 1;

    let startCol = 0;
    let endCol = y - 1;
    let startRow = 0;
    let endRow = x - 1;

    for (let i = 0; i < x; i++) {
        result[i] = new Array(y);
    }

    while (startCol <= endCol && startRow <= endRow) {
        // Fill out first row
        for (let i = startCol; i <= endCol; i++) {
            result[startRow][i] = counter;
            counter++;
        }

        // Fill out last column
        startRow++;
        for (let j = startRow; j <= endRow; j++) {
            result[j][endCol] = counter;
            counter++;
        }

        // Fill out last row
        endCol--;
        for (let i = endCol; i >= startCol; i--) {
            result[endRow][i] = counter;
            counter++;
        }

        // Fill out first column
        endRow--;
        for (let i = endRow; i >= startRow; i--) {
            result[i][startCol] = counter;
            counter++;
        }

        startCol++;
    }

    result.forEach(row => {
        console.log(row.join(' '))
    });
}

solve(5 , 5)
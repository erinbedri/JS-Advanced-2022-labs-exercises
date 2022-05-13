function solve(array, order) {
    if (order === 'asc') {
        array = array.sort((a, b) => a - b);
    } else if ( order === 'desc') {
        array = array.sort((a, b) => b - a);
    }
    return array;
}

console.log(solve([10, 8, 5, 7, 9, 6], 'desc'))
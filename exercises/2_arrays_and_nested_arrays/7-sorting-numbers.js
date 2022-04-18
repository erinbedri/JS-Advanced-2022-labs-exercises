function solve(numbers) {
    let assendingArray = numbers.slice();
    // let descendingArray = numbers.slice();
    let result = [];

    assendingArray.sort(function(a, b) {
        return a - b;
    });

    /*
    descendingArray.sort(function(a, b) {
        return b - a;
    });
    */

    while (assendingArray.length > 0) {
        let smallest = assendingArray.shift();
        let biggest = assendingArray.pop();

        result.push(smallest);
        result.push(biggest);
    }

    return result;
}

console.log(solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]))
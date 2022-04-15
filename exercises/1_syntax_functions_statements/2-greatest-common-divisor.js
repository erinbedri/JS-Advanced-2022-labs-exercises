/* 
function solve(num1, num2) {
    let firstNumber = Number(num1);
    let secondNumber = Number(num2);

    if (secondNumber === 0) {
        return firstNumber;
    }
    return solve(secondNumber, firstNumber % secondNumber);
}

console.log(solve(2154, 458)) 
*/

function solve(num1, num2) {
    let firstNumber = Number(num1);
    let secondNumber = Number(num2);

    let gcd;

    for (let i = 1; i <= firstNumber && i <= secondNumber; i++) {
        if (firstNumber % i == 0 && secondNumber % i == 0) {
            gcd = i;
        }
    }
    console.log(gcd);
}

solve(15, 5)
function sumFirstLast(input) {
    let firstNumber = Number(input.shift());
    let lastNumber = Number(input.pop());

    let sumFirstLast = firstNumber+ lastNumber;

    return sumFirstLast;
}

console.log(sumFirstLast(['20', '30', '40']));
console.log(sumFirstLast(['5', '10']));
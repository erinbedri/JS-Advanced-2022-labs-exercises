function solve(fruit, grams, price) {
    let fruitName = fruit;
    let weightInGrams = grams;
    let pricePerKilo = price;

    let weigthInKilos = weightInGrams / 1000;
    let moneyNeeded = pricePerKilo * weigthInKilos;

    let result = `I need $${moneyNeeded.toFixed(2)} to buy ${weigthInKilos.toFixed(2)} kilograms ${fruitName}.`;

    console.log(result);
}

solve('orange', 2500, 1.80)
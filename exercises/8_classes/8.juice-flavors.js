function juiceFactory(input) {
    let result = [];

    const bottleVolume = 1000;

    let fruitQuantitites = {};
    let producedBottles = {};

    input.forEach(data => {
        let [fruit, quantity] = data.split(' => ');
        quantity = Number(quantity);

        if (!(fruit in fruitQuantitites)) {
            fruitQuantitites[fruit] = 0;
        }
        fruitQuantitites[fruit] += quantity;

        if (fruitQuantitites[fruit] >= bottleVolume) {
            if (!(fruit in producedBottles)) {
                producedBottles[fruit] = 0;
            }
            producedBottles[fruit] += Math.floor(fruitQuantitites[fruit] / bottleVolume);
            fruitQuantitites[fruit] -= producedBottles[fruit] * bottleVolume;
        }
    });

    for (const [juiceType, quantity] of Object.entries(producedBottles)) {
        result.push(`${juiceType} => ${quantity}`)
    }

    return result.join('\n');

}

console.log(juiceFactory(
    [
        'Orange => 2000',
        'Peach => 1432',
        'Banana => 450',
        'Peach => 600',
        'Strawberry => 549'
    ]
))

console.log(juiceFactory(
    [
        'Kiwi => 234',
        'Pear => 2345',
        'Watermelon => 3456',
        'Kiwi => 4567',
        'Pear => 5678',
        'Watermelon => 6789'
    ]
))

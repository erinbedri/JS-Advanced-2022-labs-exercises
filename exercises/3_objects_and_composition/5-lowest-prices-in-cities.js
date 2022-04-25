function findLowerstPrice(data) {
    let output = {};

    for (product of data) {
        let [city, item, price] = product.split(' | ');
        price = Number(price);

        if (output.hasOwnProperty([item])) {
            if (price < output[item].price) {
                output[item] = { city, price };
            }
        } else {
            output[item] = { city, price };
        }
    };

    for (const [key, value] of Object.entries(output)) {
        console.log(`${key} -> ${value.price} (${value.city})`)
    };
}


let input = ['Sofia City | Audi | 100000',
    'Sofia City | BMW | 100000',
    'Sofia City | Mitsubishi | 10000',
    'Sofia City | Mercedes | 10000',
    'Sofia City | NoOffenseToCarLovers | 0',
    'Mexico City | Audi | 1000',
    'Mexico City | BMW | 99999',
    'Mexico City | Mitsubishi | 10000',
    'New York City | Mitsubishi | 1000',
    'Washington City | Mercedes | 1000',];

findLowerstPrice(input);

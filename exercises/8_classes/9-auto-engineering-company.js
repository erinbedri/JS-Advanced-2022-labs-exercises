function carFactory(input) {
    let result = [];
    let producedCars = {};

    for (const line of input) {
        let [carBrand, carModel, quantity] = line.split(' | ');

        if (!(carBrand in producedCars)) {
            producedCars[carBrand] = {};
        };

        if (!(carModel in producedCars[carBrand])) {
            producedCars[carBrand][carModel] = 0;
        }

        producedCars[carBrand][carModel] += Number(quantity);
    }

    for (const [carBrand, data] of Object.entries(producedCars)) {
        result.push(carBrand);

        for (const [carModel, quantity] of Object.entries(data)) {
            result.push(`###${carModel} -> ${quantity}`)
        }
    }
        
    return result.join('\n');
}


console.log(carFactory(
    [
        'Audi | Q7 | 1000',
        'Audi | Q6 | 100',
        'BMW | X5 | 1000',
        'BMW | X6 | 100',
        'Citroen | C4 | 123',
        'Volga | GAZ-24 | 1000000',
        'Lada | Niva | 1000000',
        'Lada | Jigula | 1000000',
        'Citroen | C4 | 22',
        'Citroen | C5 | 10'
    ]
))
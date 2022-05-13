function solution() {

    let productStorage = { protein: 0, carbohydrate: 0, fat: 0, flavour: 0 };

    const recipes = {
        apple: { carbohydrate: 1, flavour: 2, },
        lemonade: { carbohydrate: 10, flavour: 20, },
        burger: { carbohydrate: 5, fat: 7, flavour: 3, },
        eggs: { protein: 5, fat: 1, flavour: 1, },
        turkey: { protein: 10, carbohydrate: 10, fat: 10, flavour: 10, },
    };

    let output = '';

    const prepare = {
        restock: (microelements, quantity) => {
            productStorage[microelements] += quantity;
            output = 'Success';
        },

        prepare: (recipe, quantity) => {
            let enoughProducts = true;

            Object.entries(recipes[recipe]).forEach(entry => {
                let [macronutrient, count] = entry;

                if (enoughProducts && productStorage[macronutrient] < (count * Number(quantity))) {
                    enoughProducts = false;
                    output = `Error: not enough ${macronutrient} in stock`;
                }
            })

            if (enoughProducts) {
                Object.entries(recipes[recipe]).forEach(entry => {
                    let [macronutrient, count] = entry;

                    productStorage[macronutrient] -= count * quantity;
                })

                output = 'Success';
            }
        },

        report: () => {
            result = [];
            Object.entries(productStorage).forEach(entry => {
                let [macronutrient, quantity] = entry;
                result.push(`${macronutrient}=${quantity}`);
                output = result.join(' ');
            })
        }
    }

    return function (input) {
        let [command, product, quantity] = input.split(' ');
        quantity = Number(quantity);

        prepare[command](product, quantity);

        return output;
    }
}

let manager = solution();
console.log(manager('restock carbohydrate 10'));
console.log(manager('restock flavour 10'));
console.log(manager('prepare apple 1'));
console.log(manager('restock fat 10'));
console.log(manager('prepare burger 1'));
console.log(manager('report'));
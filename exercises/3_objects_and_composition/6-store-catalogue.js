function catalogue(data) {
    let output = {};

    function sortObjectByKeys(o) {
        return Object.keys(o).sort().reduce((r, k) => (r[k] = o[k], r), {});
    };

    for (info of data) {
        let [product, price] = info.split(' : ');
        price = Number(price);

        let currentStartingCharacter = product[0];

        if (output.hasOwnProperty([currentStartingCharacter])) {
            output[currentStartingCharacter].push([product, price]);
        } else {
            output[currentStartingCharacter] = [[product, price]]; 
        }
    };

    let sortedOutput = sortObjectByKeys(output);

    for (const [key, value] of Object.entries(sortedOutput)) {
        value.sort((a, b) => a[0].localeCompare(b[0]))
    };

    for (const [key, value] of Object.entries(sortedOutput)) {
        console.log(`${key}`);

        for (item of value) {
            console.log(`  ${item[0]}: ${item[1]}`)
        }
    };
}


let input = ['Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10']

catalogue(input);
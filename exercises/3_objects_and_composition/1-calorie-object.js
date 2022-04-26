function solve(input) {
    let output = {};

    for (let i = 0; i < input.length; i+=2) {
        let productName = input[i];
        let calories = input[i + 1];

        output[productName] = Number(calories);
    }

    /*
    for (let i = 0; i < input.length; i++) {
        if (i % 2 === 0) {
            output[input[i]] = 0;
        } else {
            output[input[i - 1]] += Number(input[i]);
        }
    }
    */
   
    console.log(output)
}

solve(['Yoghurt', '48', 'Rise', '138', 'Apple', '52'])
solve(['Potato', '93', 'Skyr', '63', 'Cucumber', '18', 'Milk', '42'])
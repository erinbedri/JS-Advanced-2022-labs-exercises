function solve(...args) {
    let result = {};

    args.forEach(arg => {
        console.log(`${typeof arg}: ${arg}`);

        if (typeof arg in result) {
            result[typeof arg] += 1;
        } else {
            result[typeof arg] = 1;
        }
    });

    let entries = Object.entries(result);
    let sorted = entries.sort((a, b) => b[1] - a[1]);

    for (const [key, value] of sorted) {
        console.log(`${key} = ${value}`);
    }
}

solve({ name: 'bob'}, 3.333, 9.999)
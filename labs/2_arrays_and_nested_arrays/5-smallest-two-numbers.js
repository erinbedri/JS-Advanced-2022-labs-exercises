function smallest(input) {
    let result = [];

    input.sort((a, b) => a - b);
    result = input.slice(0, 2);

    console.log(result.join(' '));
}

smallest([3, 0, 10, 4, 7, 3])
smallest([30, 15, 50, 5])
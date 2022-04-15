function solve(number, operation1, operation2, operation3, operation4, operation5) {
    let resultingNumber = Number(number);    
    let operations = [operation1, operation2, operation3, operation4, operation5];

    for (let i = 0; i < operations.length; i++) {
        switch (operations[i]) {
            case "chop":
                console.log(resultingNumber /= 2);
                break;
            case "dice":
                console.log(resultingNumber = Math.sqrt(resultingNumber));
                break;
            case "spice":
                console.log(resultingNumber += 1);
                break;
            case "bake":
                console.log(resultingNumber *= 3);
                break;
            case "fillet":
                console.log(resultingNumber *= 0.8);
                break;
        }
    }
}

solve('9', 'dice', 'spice', 'chop', 'bake', 'fillet')
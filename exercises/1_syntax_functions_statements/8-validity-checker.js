function solve(x1, y1, x2, y2) {
    const x = 0;
    const y = 0;

    let first = Math.sqrt((x1 - x)**2 + (y1 - y)**2);
    if (Number.isInteger(first)) {
        console.log(`{${x1}, ${y1}} to {${x}, ${y}} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {${x}, ${y}} is invalid`);
    }

    let second = Math.sqrt((x2 - x)**2 + (y2 - y)**2);
    if (Number.isInteger(second)) {
        console.log(`{${x2}, ${y2}} to {${x}, ${y}} is valid`);
    } else {
        console.log(`{${x2}, ${y2}} to {${x}, ${y}} is invalid`);
    }

    let third = Math.sqrt((x1 - x2)**2 + (y1 - y2)**2);
    if (Number.isInteger(third)) {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
    }

}

solve(2, 1, 1, 1);
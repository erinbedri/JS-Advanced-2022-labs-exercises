function solve(names) {
    let result = [];
    names.sort();
    
    for (i = 0; i < names.length; i++) {
        result.push(`${i + 1}.${names[i]}`);
    }

    return result.join('\n');
}

console.log(solve(["John", "Bob", "Christina", "Ema"]));
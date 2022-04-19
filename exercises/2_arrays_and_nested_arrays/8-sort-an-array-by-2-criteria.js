function solve(input) {
    input.sort(function(a, b) {
        return a.length - b.length || a.localeCompare(b);
    })

    return input.join('\n');
}

console.log(solve(['Isacc', 'Theodor', 'John', 'Jack', 'Harrison', 'George'])
)
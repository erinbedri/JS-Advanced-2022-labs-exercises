function solve(input) {
    let result = [];

    let supportedOperations = {
        add(str) {
            result.push(str);
        },
        remove(str) {
            result = result.filter(x => x !== str);
        },
        print() {
            console.log(result.join(','));
        }
    }

    input.forEach(element => {
        if (element == 'print') {
            supportedOperations.print();
        } else {
            let [command, value] = element.split(' ');
            supportedOperations[command](value);
        }
    })
}


solve(['add pesho', 'add george', 'add peter', 'remove peter','print'])


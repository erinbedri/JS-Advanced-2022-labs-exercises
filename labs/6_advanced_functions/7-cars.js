function solve(commands) {
    let cars = {};

    let supportedOperations = {
        create(name) {
            cars[name] = {};
        },
        inherit(name, parentName) {
            cars[name] = cars[parentName];
        },
        set(name, key, value) {
            cars[name][key] = value;
        },
        print(name) {
            let printout = [];
            for (const [key, value] of Object.entries(cars[name])) {
                printout.push(`${key}:${value}`);
            }
            console.log(printout.join(','));
        }
    }

    commands.forEach(command => {
        if (command.includes('print')) {
            let [_, name] = command.split(' ');
            supportedOperations.print(name);

        } else if (command.includes('set')) {
            let [_, name, property, value] = command.split(' ');
            supportedOperations.set(name, property, value);

        } else if (command.includes('inherit')) {
            let [_, name, __, parent] = command.split(' ');
            supportedOperations.inherit(name, parent);

        } else {
            let [_, name] = command.split(' ');
            supportedOperations.create(name);
        }
    })
}

solve(['create pesho',
    'create gosho inherit pesho',
    'create stamat inherit gosho',
    'set pesho rank number1',
    'set gosho nick goshko',
    'print stamat']
) //'nick:goshko,rank:number1\n'
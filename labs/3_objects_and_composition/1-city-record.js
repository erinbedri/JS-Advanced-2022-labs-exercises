function solve(name, population, treasury) {
    
    // First option
    let cityRecord = {
        name: name,
        population: population,
        treasury: treasury,
    };

    // Second option
    let cityRecordSecond = {name: name, population: population, treasury: treasury};

    // Third option
    let cityRecordThird = {name, population, treasury};

    // Fourth option
    let cityRecordFourth = {};
    cityRecordFourth.name = name;
    cityRecordFourth.population = population;
    cityRecordFourth.treasury = treasury;

    return cityRecord;
}

console.log(solve('Tortuga', 7000, 15000))
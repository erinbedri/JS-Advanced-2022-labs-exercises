function solve(input) {
    let towns = {};

    for (info of input) {
        let currentInfo = info.split(' <-> ');
        let currentTown = currentInfo[0];
        let currentPopulation = Number(currentInfo[1]);

        if (towns.hasOwnProperty(currentTown)) {
            towns[currentTown] += currentPopulation;
        } else {
            towns[currentTown] = currentPopulation;
        }
    }

    for (const [key, value] of Object.entries(towns)) {
        console.log(`${key} : ${value}`);
      }
}

solve(['Sofia <-> 1200000', 'Montana <-> 20000', 'New York <-> 10000000', 'Washington <-> 2345000', 'Las Vegas <-> 1000000'])
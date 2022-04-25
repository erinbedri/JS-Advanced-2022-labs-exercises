function solve(data) {
    let output = [];

    let [town, latitude, longitude] = data[0].split('| ').join('').split(' |').join('').split(' ');

    for (info of data.slice(1,)) {

        let currentInfo = info.split('|');

        let currentTown = currentInfo[1].trim();
        let currentLatitude = Number(currentInfo[2].trim());
        let currentLongitude = Number(currentInfo[3].trim());

        let currentEntry = {
            [town]: currentTown,
            [latitude]: Number(currentLatitude.toFixed(2)),
            [longitude]: Number(currentLongitude.toFixed(2)),
        };

        output.push(currentEntry);
    };
    return JSON.stringify(output);
}


let input = ['| Town | Latitude | Longitude |',
    '| Veliko Turnovo | 43.0757 | 25.6172 |',
    '| Monatevideo | 34.50 | 56.11 |'];

console.log(solve(input))
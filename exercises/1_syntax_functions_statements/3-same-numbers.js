function solve(number) {
    let numberAsString = String(number);
    let sum = 0;
    let allCharactersSame = true;

    for (let i = 0; i < numberAsString.length; i++) {
        if (numberAsString[i] != numberAsString[0]) {
            allCharactersSame = false;
        }
        sum += Number(numberAsString[i]);
    }
    console.log(allCharactersSame);
    console.log(sum);
}

solve(2222222)
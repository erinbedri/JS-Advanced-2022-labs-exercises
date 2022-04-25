function register(data) {
    let output = [];

    for (heroData of data) {
        let [name, level, items] = heroData.split(' / ')
        level = Number(level);
        items = items ? items.split(', ') : [];

        let currentHero = {name, level, items};
        output.push(currentHero);
    }

    return JSON.stringify(output);
}


let input = ['Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'];

console.log(register(input))
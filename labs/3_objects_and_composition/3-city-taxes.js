function cityTaxes(name, population, treasury) {
    
    let cityRecord = {
        name: name,
        population: population,
        treasury: treasury,
        taxRate: 10,
        collectTaxes: function() {
            this.treasury += this.population * this.taxRate;
        },
        applyGrowth: function(percentage) {
            let percent = percentage / 100;
            this.population *= (1 + percent);
        },
        applyRecession: function(percentage) {
            let percent = percentage / 100;
            this.treasury *=  (1 - percent);
        },
    };

    return cityRecord;
}

const city = cityTaxes('Tortuga', 7000, 15000);

city.collectTaxes();
console.log(city.treasury);
city.applyGrowth(5);
console.log(city.population) 
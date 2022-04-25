function factory(requirements) {

    function createModel(model) {
        return model;
    };

    function createEngine(hp) {
        let engine = {};

        if (hp <= 90) {
            engine = { power: 90, volume: 1800 };
        } else if (hp <= 120) {
            engine = { power: 120, volume: 2400 }; 
        } else if (hp <= 200) {
            engine = { power: 200, volume: 3500 };
        };

        return engine;
    };

    function createCarriage(type, color) {
        let carriage = {type, color};

        return carriage;
    };

    function createWheels(size) {
        let wheels = [];

        if (size % 2 === 0) {
            wheels = Array(4).fill(size - 1);
        } else {
            wheels = Array(4).fill(size);
        };

        return wheels;
    }

    return {
        model: createModel(requirements.model),
        engine: createEngine(requirements.power),
        carriage: createCarriage(requirements.carriage, requirements.color),
        wheels: createWheels(requirements.wheelsize),
    }
};

let input = {
    model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14
};

console.log(factory(input));

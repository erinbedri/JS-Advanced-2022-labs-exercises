function roadRadar(speed, location) {
    let currentSpeed = speed;
    let area = location;

    const motorwayLimit = 130;
    const interstateLimit = 90;
    const cityLimit = 50;
    const residentialLimit = 20;

    let result = ""
    let difference;
    let status;

    switch (area) {
        case "residential":
            difference = speed - residentialLimit;
            if (speed <= residentialLimit) {
                result = `Driving ${speed} km/h in a ${residentialLimit} zone`;
            } else {
                if (speed <= residentialLimit + 20) {
                    status = 'speeding';
                } else if (speed <= residentialLimit + 40) {
                    status = 'excessive speeding';
                } else {
                    status = 'reckless driving';
                }
                result = `The speed is ${difference} km/h faster than the allowed speed of ${residentialLimit} - ${status}`;
            } 
            break;
        case "city":
            difference = speed - cityLimit;
            if (speed <= cityLimit) {
                result = `Driving ${speed} km/h in a ${cityLimit} zone`;
            } else {
                if (speed <= cityLimit + 20) {
                    status = 'speeding';
                } else if (speed <= cityLimit + 40) {
                    status = 'excessive speeding';
                } else {
                    status = 'reckless driving';
                }
                result = `The speed is ${difference} km/h faster than the allowed speed of ${cityLimit} - ${status}`;
            } 
            break;
        case "interstate":
            difference = speed - interstateLimit;
            if (speed <= interstateLimit) {
                result = `Driving ${speed} km/h in a ${interstateLimit} zone`;
            } else {
                if (speed <= interstateLimit + 20) {
                    status = 'speeding';
                } else if (speed <= interstateLimit + 40) {
                    status = 'excessive speeding';
                } else {
                    status = 'reckless driving';
                }
                result = `The speed is ${difference} km/h faster than the allowed speed of ${interstateLimit} - ${status}`;
            } 
            break;
        case "motorway":
            difference = speed - motorwayLimit;
            if (speed <= motorwayLimit) {
                result = `Driving ${speed} km/h in a ${motorwayLimit} zone`
            } else {
                if (speed <= motorwayLimit + 20) {
                    status = 'speeding';
                } else if (speed <= motorwayLimit + 40) {
                    status = 'excessive speeding';
                } else {
                    status = 'reckless driving';
                }
                result = `The speed is ${difference} km/h faster than the allowed speed of ${motorwayLimit} - ${status}`;
            } 
            break;
        default:
            result = 'Not Valid Input';
    }
    console.log(result);
}

roadRadar(200, 'motorway')
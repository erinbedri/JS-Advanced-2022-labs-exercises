function attachEventsListeners() {

    document.addEventListener('click', event => {
        let inputUnit = document.getElementById('inputUnits').value;
        let inputDistance = Number(document.getElementById('inputDistance').value);

        let outputUnit = document.getElementById('outputUnits').value;
        let outputDistanceElement = document.getElementById('outputDistance')

        let inputToMeters;
        let metersToOutput;
        
        if (event.target.matches('#convert')) {

            if (inputUnit === 'km') {
                inputToMeters = inputDistance * 1000;
            } else if (inputUnit === 'm') {
                inputToMeters = inputDistance * 1;
            } else if (inputUnit === 'cm') {
                inputToMeters = inputDistance * 0.01;
            } else if (inputUnit === 'mm') {
                inputToMeters = inputDistance * 0.001;
            } else if (inputUnit === 'mi') {
                inputToMeters = inputDistance * 1609.34;
            } else if (inputUnit === 'yrd') {
                inputToMeters = inputDistance * 0.9144;
            } else if (inputUnit === 'ft') {
                inputToMeters = inputDistance * 0.3048;
            } else if (inputUnit === 'in') {
                inputToMeters = inputDistance * 0.0254;
            }

            if (outputUnit === 'km') {
                metersToOutput = inputToMeters / 1000;
            } else if (outputUnit === 'm') {
                metersToOutput = inputToMeters / 1;
            } else if (outputUnit === 'cm') {
                metersToOutput = inputToMeters / 0.01;
            } else if (outputUnit === 'mm') {
                metersToOutput = inputToMeters / 0.001;
            } else if (outputUnit === 'mi') {
                metersToOutput = inputToMeters / 1609.34;
            } else if (outputUnit === 'yrd') {
                metersToOutput = inputToMeters / 0.9144;
            } else if (outputUnit === 'ft') {
                metersToOutput = inputToMeters / 0.3048;
            } else if (outputUnit === 'in') {
                metersToOutput = inputToMeters / 0.0254;
            }

            outputDistanceElement.removeAttribute('disabled');
            outputDistanceElement.value = metersToOutput;
        } 
    })
}
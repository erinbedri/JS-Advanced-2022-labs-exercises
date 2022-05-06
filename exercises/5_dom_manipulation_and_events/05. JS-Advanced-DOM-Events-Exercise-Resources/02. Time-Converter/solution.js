function attachEventsListeners() {

    document.addEventListener('click', event => {

        let daysField = document.getElementById('days');
        let hoursField = document.getElementById('hours');
        let minutesField = document.getElementById('minutes');
        let secondsField = document.getElementById('seconds');

        if (event.target.matches('#daysBtn')) {
            let input = Number(daysField.value);

            hoursField.value = input * 24;
            minutesField.value = input * 1440;
            secondsField.value = input * 86400;

        } else if (event.target.matches('#hoursBtn')) {
            let input = Number(hoursField.value);

            daysField.value = input / 24;
            minutesField.value = input * 60;
            secondsField.value = input * 3600;

        } else if (event.target.matches('#minutesBtn')) {
            let input = Number(minutesField.value);

            daysField.value = input / 1440;
            hoursField.value = input / 60;
            secondsField.value = input * 60;

        } else if (event.target.matches('#secondsBtn')) {
            let input = Number(secondsField.value);

            daysField.value = input / 86400;
            hoursField.value = input / 3600;
            minutesField.value = input / 60;
        }
    })
}

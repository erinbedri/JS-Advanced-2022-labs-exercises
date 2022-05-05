function validate() {
    let inputElement = document.getElementById('email');

    const re = /\S+@\S+\.\S+/;

    inputElement.addEventListener('change', (event) => {

        if (re.test(event.target.value)) {
            event.target.removeAttribute('class');
            return;
        }
        event.target.className = 'error';
    });
}

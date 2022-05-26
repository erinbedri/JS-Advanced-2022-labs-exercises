function validate() {
    const regex = /([a-z]+@[a-z]+.[a-z]+)$/gm;
    let inputElement = document.getElementById('email');

    inputElement.addEventListener('change', () => {
        if (!inputElement.value.match(regex)) {
            inputElement.classList = 'error';
        } else {
            inputElement.classList.remove('error');
        }
    })
}
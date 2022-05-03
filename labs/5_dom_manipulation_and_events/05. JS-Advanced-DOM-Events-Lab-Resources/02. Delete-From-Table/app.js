function deleteByEmail() {
    let inputElement = document.querySelector("[name='email']");
    let inputValue = inputElement.value;

    let emailElements = document.querySelectorAll('tr td:nth-of-type(2)');

    let outputElement = document.getElementById('result');

    for (emailEntry of emailElements) {
        if (emailEntry.textContent === inputValue) {
            emailEntry.parentElement.remove();
            outputElement.textContent = 'Deleted.';
            break;
        }
    }
    outputElement.textContent = 'Not found.'
}
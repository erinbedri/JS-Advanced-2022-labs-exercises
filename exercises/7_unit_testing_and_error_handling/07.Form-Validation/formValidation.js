function validate() {

    let usernameInputElement = document.getElementById('username');
    let emailInputElement = document.getElementById('email');
    let passwordInputElement = document.getElementById('password');
    let confirmPasswordInputElement = document.getElementById('confirm-password');
    let isCompanyCheckboxElement = document.getElementById('company');
    let companyNumberInputElement = document.getElementById('companyNumber');
    let companyInfoElement = document.getElementById('companyInfo');
    let submitButtonElement = document.getElementById('submit');
    let validDivElement = document.getElementById('valid');

    const usernameValidationRegex = /^[a-zA-Z0-9]{3,20}$/gm;
    const passwordValidationRegex = /^[\w]{5,15}$/gm;
    const emailValidationRegex = /^[^@.]+@[^@]*\.[^@]*$/;

    isCompanyCheckboxElement.addEventListener('change', function () {
        if (this.checked) {
            companyInfoElement.style.display = 'block';
        } else {
            companyInfoElement.style.display = 'none';
        }
    })

    submitButtonElement.addEventListener('click', (e) => {
        e.preventDefault();

        let isValid = [];

        if (usernameInputElement.value.match(usernameValidationRegex)) {
            usernameInputElement.style.border = 'none';
            isValid.push(true);
        } else {
            usernameInputElement.style.borderColor = 'red';
            isValid.push(false);
        }

        if (emailInputElement.value.match(emailValidationRegex)) {
            emailInputElement.style.border = 'none';
            isValid.push(true);
        } else {
            emailInputElement.style.borderColor = 'red';
            isValid.push(false);
        }

        if (passwordInputElement.value.match(passwordValidationRegex)
            && passwordInputElement.value === confirmPasswordInputElement.value) {
            passwordInputElement.style.border = 'none';
            confirmPasswordInputElement.style.border = 'none';
            isValid.push(true);
        } else {
            passwordInputElement.style.borderColor = 'red';
            confirmPasswordInputElement.style.borderColor = 'red';
            isValid.push(false);
        }

        if (isCompanyCheckboxElement.checked) {
            if (companyNumberInputElement.value < 1000 || companyNumberInputElement.value > 9999) {
                companyNumberInputElement.style.borderColor = 'red';
                isValid.push(false);
            } else {
                companyNumberInputElement.style.border = 'none';
                isValid.push(true);
            }
        }

        if (isValid.includes(false)) {
            validDivElement.style.display = 'none';
        } else {
            validDivElement.style.display = 'block';
        }
    })
}

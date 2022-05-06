function addItem() {

    document.addEventListener('click', event => {
        if (event.target.matches('input[type="button"]')) {

            let selectElement = document.getElementById('menu');
            let textInputElement = document.getElementById('newItemText');
            let valueInputElement = document.getElementById('newItemValue');
            let optionElement = document.createElement('option');

            optionElement.textContent = textInputElement.value;
            optionElement.value = valueInputElement.value;

            selectElement.appendChild(optionElement);

            textInputElement.value = '';
            valueInputElement.value = '';
        }
    })
}
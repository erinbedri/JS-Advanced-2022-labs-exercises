function addItem() {

    let selectElement = document.getElementById('menu');
    let textInputElement = document.getElementById('newItemText');
    let valueInputElement = document.getElementById('newItemValue');
    
    let optionElement = document.createElement('option');
    optionElement.textContent = textInputElement.value;
    optionElement.value = valueInputElement.value;

    if (textInputElement.value !== '' && valueInputElement.value !== '') {
        selectElement.appendChild(optionElement);
    }

    textInputElement.value = '';
    valueInputElement.value = '';
}

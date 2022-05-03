function addItem() {
    let inputElement = document.getElementById('newItemText');
    let inputValue = inputElement.value;

    let newLiElement = document.createElement('li');
    newLiElement.textContent = inputValue;

    document.getElementById('items').appendChild(newLiElement);
}
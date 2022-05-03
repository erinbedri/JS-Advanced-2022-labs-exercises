function addItem() {
    let inputElement = document.getElementById('newItemText');
    let newLiElement = document.createElement('li');
    newLiElement.textContent = inputElement.value;

    inputElement.value = '';

    document.getElementById('items').appendChild(newLiElement);

    let deleteElement = document.createElement('a');
    deleteElement.href = '#';
    deleteElement.textContent = '[Delete]';
    newLiElement.appendChild(deleteElement);

    deleteElement.addEventListener('click', (event) => {
       event.currentTarget.parentElement.remove();
    })
}
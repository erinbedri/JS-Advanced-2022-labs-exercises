function solve() {
    let name = document.querySelector('[placeholder="Name"]');
    let hall = document.querySelector('[placeholder="Hall"]');
    let price = document.querySelector('[placeholder="Ticket Price"]');

    let onScreenButton = document.querySelector('div button');
    let clearButton = document.getElementById('archive').querySelector('button');

    let moviesOnScreenSection = document.getElementById('movies').querySelector('ul');
    let archiveSection = document.getElementById('archive').querySelector('ul');

    onScreenButton.addEventListener('click', function (event) {
        event.preventDefault();

        if (name.value == '' && hall.value == '') {
            return;
        };

        if (Number(price.value) || price.value == '0') {

            let newListElement = document.createElement('li');

            let newName = document.createElement('span');
            newName.textContent = name.value;

            let newHall = document.createElement('strong');
            newHall.textContent = `Hall: ${hall.value}`;

            let newDivElement = document.createElement('div');
            let newPrice = document.createElement('strong');
            newPrice.textContent = Number(price.value).toFixed(2);
            newDivElement.appendChild(newPrice);

            let newInput = document.createElement('input');
            newInput.placeholder = 'Tickets Sold';
            newDivElement.appendChild(newInput);

            let archiveButton = document.createElement('button');
            archiveButton.textContent = 'Archive';
            newDivElement.appendChild(archiveButton);

            newListElement.appendChild(newName);
            newListElement.appendChild(newHall);
            newListElement.appendChild(newDivElement);

            moviesOnScreenSection.appendChild(newListElement);

            name.value = '';
            hall.value = '';
            price.value = '';

            archiveButton.addEventListener('click', function (event) {
                event.preventDefault();

                if (Number(newInput.value) || newInput.value == '0') {

                    let total = Number(newInput.value) * Number(newPrice.textContent);

                    let newArchiveListElement = document.createElement('li');

                    let newArchiveName = document.createElement('span');
                    newArchiveName.textContent = newName.textContent;

                    let newTotal = document.createElement('strong');
                    newTotal.textContent = `Total amount: ${total.toFixed(2)}`;

                    let deleteButton = document.createElement('button');
                    deleteButton.textContent = 'Delete';

                    newArchiveListElement.appendChild(newArchiveName);
                    newArchiveListElement.appendChild(newTotal);
                    newArchiveListElement.appendChild(deleteButton);

                    archiveSection.appendChild(newArchiveListElement);

                    moviesOnScreenSection.removeChild(newListElement);

                    deleteButton.addEventListener('click', function (event) {
                        event.preventDefault();

                        event.currentTarget.parentElement.remove();
                    })

                    clearButton.addEventListener('click', function (event) {
                        event.preventDefault();

                        let listElements = archiveSection.querySelectorAll('li');

                        listElements.forEach(element => {
                            element.remove();
                        });

                    })
                };

            })
        }

    })
}
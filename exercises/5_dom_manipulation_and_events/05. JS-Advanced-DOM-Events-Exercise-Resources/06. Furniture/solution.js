function solve() {

	let generateButtonElement = document.getElementsByTagName('button')[0];
	let buyButtonElement = document.getElementsByTagName('button')[1];

	let textAreaGenerateElement = document.getElementsByTagName('textarea')[0];
	let textAreaBuyElement = document.getElementsByTagName('textarea')[1];

	let tableElement = document.getElementsByClassName('table')[0].getElementsByTagName('tbody')[0];

	generateButtonElement.addEventListener('click', () => {
		let input = JSON.parse(textAreaGenerateElement.value);

		for (object of input) {

			//Insert New Row
			let newRow = tableElement.insertRow();	

			//Inser Picture
			let newCellImage = newRow.insertCell(); 	
			let newImage = document.createElement('img');
			newImage.setAttribute('src', object.img);
			newCellImage.appendChild(newImage);

			//Insert Name
			let newCellName = newRow.insertCell();
			let newName = document.createElement('p');
			newName.setAttribute('id', 'name');
			let newPText = document.createTextNode(object.name);
			newName.appendChild(newPText);
			newCellName.appendChild(newName);
			
			//Insert Price
			let newCellPrice = newRow.insertCell();
			let newPrice = document.createElement('p');
			newPrice.setAttribute('id', 'price');
			let newPPrice = document.createTextNode(object.price);
			newPrice.appendChild(newPPrice);
			newCellPrice.appendChild(newPrice);

			//Insert Decoration Factor
			let newCellDecorationFactor = newRow.insertCell();
			let newFactor = document.createElement('p');
			let newPFactor = document.createTextNode(object.decFactor);
			newFactor.setAttribute('id', 'factor');
			newFactor.appendChild(newPFactor);
			newCellDecorationFactor.appendChild(newFactor);

			//Insert Mark
			let newCellMark = newRow.insertCell();
			let newInput = document.createElement('input');
			newInput.setAttribute('type', 'checkbox');
			newCellMark.appendChild(newInput);
		}
	})

	buyButtonElement.addEventListener('click', () => {
		let markedCheckboxes = Array.from(document.querySelectorAll('input[type=checkbox]:checked'));
		
		let boughtProductsNames = [];
		let boughtProductsPrices = 0;
		let factor = 0

		for (checkbox of markedCheckboxes) {
			boughtProductsPrices += Number(checkbox.parentElement.parentElement.querySelectorAll('td #price')[0].textContent);
			boughtProductsNames.push(checkbox.parentElement.parentElement.querySelectorAll('td #name')[0].textContent);
			factor += Number(checkbox.parentElement.parentElement.querySelectorAll('td #factor')[0].textContent);
		}

		textAreaBuyElement.removeAttribute('disabled');
		textAreaBuyElement.textContent = `Bought furniture: ${boughtProductsNames.join(', ')}`;
		textAreaBuyElement.textContent += `\nTotal price: ${boughtProductsPrices.toFixed(2)}`;
		textAreaBuyElement.textContent += `\nAverage decoration factor: ${factor / markedCheckboxes.length}`;
	})

}
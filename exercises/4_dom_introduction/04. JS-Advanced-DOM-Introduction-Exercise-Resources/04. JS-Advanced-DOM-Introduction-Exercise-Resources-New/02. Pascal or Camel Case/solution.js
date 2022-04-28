function solve() {
	let text = document.getElementById('text').value.toLowerCase().split(' ');
	let namingConvention = document.getElementById('naming-convention').value;
	let resultElement = document.getElementById('result');
	let output = '';

	if (namingConvention === 'Camel Case') {
		for (let i = 0; i < text.length; i++) {
			if (i === 0) {
				output += text[i];
			} else {
				output += text[i].charAt(0).toUpperCase() + text[i].slice(1);
			}
		}
	} else if (namingConvention === 'Pascal Case') {
		for (let i = 0; i < text.length; i++) {
			output += text[i].charAt(0).toUpperCase() + text[i].slice(1);
		}
	} else {
		output = 'Error!';
	}

	resultElement.textContent = output;
}
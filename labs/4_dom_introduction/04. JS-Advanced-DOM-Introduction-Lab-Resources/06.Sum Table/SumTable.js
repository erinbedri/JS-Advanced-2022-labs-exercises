function sumTable() {
    let elements = document.querySelectorAll('tr td:nth-of-type(2n)');
    let outputElement = document.getElementById('sum');

    let sum = 0;

    elements.forEach(element => {
        currentNumber = Number(element.textContent) || 0;
        sum += currentNumber;
    });

    outputElement.textContent = sum; 
}



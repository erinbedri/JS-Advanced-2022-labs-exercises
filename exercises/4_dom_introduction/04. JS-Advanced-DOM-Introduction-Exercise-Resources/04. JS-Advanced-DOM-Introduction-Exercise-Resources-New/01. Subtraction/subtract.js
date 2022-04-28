function subtract() {
    let firstNumberElement = document.getElementById('firstNumber');
    let secondNumberElement = document.getElementById('secondNumber');

    let firstNumber = Number(firstNumberElement.value);
    let secodnNumber = Number(secondNumberElement.value);

    console.log(firstNumber)

    let outputElement = document.getElementById('result');
    outputElement.textContent = firstNumber - secodnNumber;
}
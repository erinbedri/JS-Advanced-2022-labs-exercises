function calc() {
    let firstElement = document.getElementById('num1');
    let secondElement = document.getElementById('num2');

    let firstNumber = Number(firstElement.value);
    let secondNumber = Number(secondElement.value);
    
    let resultElement = document.getElementById('sum');

    let sum = firstNumber + secondNumber;

    resultElement.value = sum;
}

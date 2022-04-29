function solve() {
  let userInput = document.getElementById('input').value;
  let sentences = userInput.split('.').filter(s => s !== '');
  let outputElement = document.getElementById('output');

  while (sentences.length > 0) {
    let currentParagraph = sentences.splice(0, 3).join('.') + '.';
    let p = document.createElement('p');
    p.textContent = currentParagraph;
    outputElement.appendChild(p);
  }
}
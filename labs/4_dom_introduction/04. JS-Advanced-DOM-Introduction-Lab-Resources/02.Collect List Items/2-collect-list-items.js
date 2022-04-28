function extractText() {
    let collectedElements = document.getElementById('items');

    let textArea = document.getElementById('result');
    textArea.textContent = collectedElements.textContent;
}
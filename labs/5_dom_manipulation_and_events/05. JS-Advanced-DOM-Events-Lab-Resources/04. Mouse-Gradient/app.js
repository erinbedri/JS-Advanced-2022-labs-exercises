function attachGradientEvents() {
    let gradientElement = document.getElementById('gradient');
    let resultElement = document.getElementById('result');
    
    gradientElement.addEventListener('mousemove', gradientMousemoveHandler);

    const gradientMousemoveHandler = function(event) {
        let currentPosition = Math.floor(event.offsetX / event.target.clientWidth * 100);
        resultElement.textContent = `${currentPosition}%`;
    }
}

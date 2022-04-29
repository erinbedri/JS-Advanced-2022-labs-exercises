function toggle() {
    let buttonElement = document.getElementsByClassName('button')[0];
    let extraElement = document.getElementById('extra');
    
    if (buttonElement.textContent == "Less") {
        extraElement.style.display = 'none';
        buttonElement.textContent = "More";
    } else if (buttonElement.textContent == "More") {
        extraElement.style.display = 'block';
        buttonElement.textContent = "Less";
    }
} 
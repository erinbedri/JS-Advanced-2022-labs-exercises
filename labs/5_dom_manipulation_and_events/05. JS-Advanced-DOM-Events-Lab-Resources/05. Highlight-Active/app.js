function focused() {
    let divElements = Array.from(document.querySelectorAll('div div input'));

    divElements.forEach(el => {
        el.addEventListener('focus', (event) => {
            event.currentTarget.parentElement.classList.add('focused');
        })

        el.addEventListener('blur', (event) => {
            event.currentTarget.parentElement.classList.remove('focused');
        })
    })
}

/*
function focused() {
    let divElements = Array.from(document.querySelectorAll('div div input'));

    divElements.forEach(el => {
        el.addEventListener('focus', focus)
    })
    
    divElements.forEach(el => {
        el.addEventListener('blur', blur)
    })

    function focus(event) {
        event.currentTarget.parentElement.classList.add('focused');
    }

    function blur(event) {
        event.currentTarget.parentElement.classList.remove('focused');
    }
}
*/
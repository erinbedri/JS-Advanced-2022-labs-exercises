function colorize() {
    let rowElements = document.querySelectorAll('tr:nth-of-type(2n) td')

    rowElements.forEach(row => {
        row.style.backgroundColor = 'teal';
    });
}
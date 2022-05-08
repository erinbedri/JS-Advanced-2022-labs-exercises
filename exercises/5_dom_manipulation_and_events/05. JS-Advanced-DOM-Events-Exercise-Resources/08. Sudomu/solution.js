function solve() {

    document.addEventListener('click', event => {

        let table = document.getElementsByTagName('table')[0];
        let rows = table.querySelectorAll('tbody tr');
        let outputElement = document.querySelector('#check p')

        if (event.target.matches('button') && event.target.textContent === 'Quick Check') {

            let matrix = [];
            let sums = [];
            
            for (let i = 0; i < rows.length; i++) {
                let cells = rows[i].querySelectorAll('td');
                let row = [];

                for (let j = 0; j < cells.length; j++) {
                    row.push(Number(cells[j].querySelector('input').value));
                }

                matrix.push(row);
            }

            for (let i = 0; i < matrix.length; i++) {
                let sumRow = 0;
                let sumCol = 0;

                for (let j = 0; j < matrix[i].length; j++) {
                    sumRow += matrix[i][j];
                    sumCol += matrix[j][i];
                }

                sums.push(sumRow);
                sums.push(sumCol);
            }

            allEqual = arr => arr.every(v => v === arr[0]);

            if (!allEqual(sums)) {
                table.style.border = '2px solid red';
                outputElement.style.color = 'red';
                outputElement.textContent = 'NOP! You are not done yet...';
            } else {
                table.style.border = '2px solid green';
                outputElement.style.color = 'green';
                outputElement.textContent = 'You solve it! Congratulations!';
            }

        } else if (event.target.matches('button') && event.target.textContent === 'Clear') {
            table.style.border = 'none';
            outputElement.textContent = '';

            for (let i = 0; i < rows.length; i++) {
                let cells = rows[i].querySelectorAll('td');

                for (let j = 0; j < cells.length; j++) {
                    cells[j].querySelector('input').value = '';
                }
            }
        }
    })
}
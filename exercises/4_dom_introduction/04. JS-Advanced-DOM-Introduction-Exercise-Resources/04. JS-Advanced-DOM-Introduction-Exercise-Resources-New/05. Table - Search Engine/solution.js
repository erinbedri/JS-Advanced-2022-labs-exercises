function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);
   
   function onClick() {
      
      let userInputElement = document.getElementById('searchField');
      let userInput = userInputElement.value;
      let database = Array.from(document.querySelectorAll('.container tbody tr'));
      for (row of database) {

         if (row.innerText.includes(userInput) && userInput != '') {
            row.className = 'select';
         } else {
            row.className = '';
         }
      }
   }
}
function search() {
   let searchElement = document.getElementById('searchText');
   let searchText = searchElement.value;
   let resultElement = document.getElementById('result');

   let database = Array.from(document.querySelectorAll('#towns li'));

   let foundWords = [];

   for (liItem of database) {
      if (liItem.innerText.includes(searchText)) {
         liItem.style.fontWeight = 'bold';
         liItem.style.textDecoration = 'underline';
         foundWords.push(liItem);
      } else {
         liItem.style.fontWeight = 'normal';
         liItem.style.textDecoration = 'none';
      }
   }


   resultElement.textContent = `${foundWords.length} matches found`;

}
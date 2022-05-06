function create(input) {
   let parentElement = document.getElementById('content');

   for (let message of input) {
      let div = document.createElement('div');
      let p = document.createElement('p');

      p.textContent = message;
      p.style.display = 'none';

      div.addEventListener('click', () => {
         p.style.display = 'block';
      })
      
      div.appendChild(p);
      parentElement.appendChild(div);
   }
}
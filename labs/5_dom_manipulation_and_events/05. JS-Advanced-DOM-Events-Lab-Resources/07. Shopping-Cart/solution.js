function solve() {
   let addButtonElements = Array.from(document.querySelectorAll('.add-product'));
   let textAreaElement = document.getElementsByTagName('textarea')[0];
   let checkoutButtonElement = document.getElementsByClassName('checkout')[0];

   let totalCost = 0;
   let cart = new Set();

   addButtonElements.forEach(el => {
      el.addEventListener('click', (e) => {
         if (e.target.className == 'add-product') {
            let currentParentElement = e.target.parentElement.parentElement;
            let currentProductPrice = Number(currentParentElement.querySelector('.product-line-price').textContent);
            let currentProductName = currentParentElement.querySelector('.product-title').textContent;

            textAreaElement.disabled = 'false';
            textAreaElement.textContent += `Added ${currentProductName} for ${currentProductPrice.toFixed(2)} to the cart.\n`;

            totalCost += currentProductPrice;
            cart.add(currentProductName);
         }
      })
   })
   
   checkoutButtonElement.addEventListener('click', () => {
      textAreaElement.textContent += `You bought ${Array.from(cart).join(', ')} for ${totalCost.toFixed(2)}.`;

      addButtonElements.forEach(el => {
         el.disabled = 'true';
      });
      checkoutButtonElement.disabled = 'true';
   })
}
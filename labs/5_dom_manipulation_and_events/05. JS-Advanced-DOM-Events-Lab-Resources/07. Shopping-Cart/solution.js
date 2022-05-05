function solve() {
   let addButtonElements = Array.from(document.getElementsByClassName('add-product'));
   let textAreaElement = document.getElementsByTagName('textarea')[0];
   let checkoutButtonElement = document.getElementsByClassName('checkout')[0];

   let totalCost = 0;
   let cart = new Set();

   // Event Delegation
   document.addEventListener('click', e => {
      if (e.target.matches('.add-product')) {
         let currentParentElement = e.target.parentElement.parentElement;
         let currentProductPrice = Number(currentParentElement.querySelector('.product-line-price').textContent);
         let currentProductName = currentParentElement.querySelector('.product-title').textContent;

         textAreaElement.disabled = 'false';
         textAreaElement.textContent += `Added ${currentProductName} for ${currentProductPrice.toFixed(2)} to the cart.\n`;

         totalCost += currentProductPrice;
         cart.add(currentProductName);
      }
   })

   /*
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
   */
   
   checkoutButtonElement.addEventListener('click', () => {
      textAreaElement.textContent += `You bought ${Array.from(cart).join(', ')} for ${totalCost.toFixed(2)}.`;

      addButtonElements.forEach(el => {
         el.disabled = 'true';
      });
      checkoutButtonElement.disabled = 'true';
   })
}

/*
// Handy Global event Selector - Event Delegation
function addGlobalEventListener(type, selector, callback) {
   document.addEventListener(type, e => {
      if (e.targer.matches(selector)) callback(e)
   })
}
*/
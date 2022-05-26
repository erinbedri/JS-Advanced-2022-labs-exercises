function notify(message) {
  let divElement = document.getElementById('notification');
  divElement.innerText = message;
  divElement.style.display = 'block';

  divElement.addEventListener('click', () => {
    if (divElement.style.display == 'block') {
      divElement.style.display = 'none';
    }
  })
}
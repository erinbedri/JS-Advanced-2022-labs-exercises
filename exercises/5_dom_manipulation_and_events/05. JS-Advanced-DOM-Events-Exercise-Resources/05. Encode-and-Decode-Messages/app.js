function encodeAndDecodeMessages() {
    let textAreaElement = document.querySelector('textarea[placeholder="Write your message here..."]');
    let textAreaElement2 = document.querySelector('textarea[placeholder="No messages..."]');

    document.addEventListener('click', event => {

        if (event.target.matches('button') && event.target.textContent == 'Encode and send it') {
            let encodedMessage = '';

            for (let i = 0; i < textAreaElement.value.length; i++) {
                encodedMessage += String.fromCharCode(textAreaElement.value.charCodeAt(i) + 1);
            }
            
            textAreaElement2.value = encodedMessage;
            textAreaElement.value = '';

        } else if (event.target.matches('button') && event.target.textContent == 'Decode and read it') {
            let decodedMessage = '';

            for (let i = 0; i < textAreaElement2.value.length; i++) {
                decodedMessage += String.fromCharCode(textAreaElement2.value.charCodeAt(i) - 1);
            }

            textAreaElement2.value = decodedMessage;
        }
    })
}
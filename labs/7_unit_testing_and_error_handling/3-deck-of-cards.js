function printDeckOfCards(cards) {
    let deck = [];

    function createCard(face, suit) {
        let cardSuit;

        const validFaces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
        const validSuits = ['S', 'H', 'D', 'C'];

        if (!validFaces.includes(face) || !validSuits.includes(suit)) {
            return;
        }

        if (suit == "S") {
            cardSuit = '\u2660';
        } else if (suit == "H") {
            cardSuit = '\u2665';
        } else if (suit == "D") {
            cardSuit = '\u2666';
        } else {
            cardSuit = '\u2663';
        }

        return `${face}${cardSuit}`;
    }

    for (let card of cards) {

        let currentFace = card.slice(-card.length, -1); 
        let currentSuit = card.slice(-1)

        let currentCard = createCard(currentFace, currentSuit);

        if (!currentCard) {
            console.log(`Invalid card: ${card}`);
            return;
        }

        deck.push(currentCard)
    }

    console.log(deck.join(' '));

}

printDeckOfCards(['AS', '10D', 'KH', '2C'])
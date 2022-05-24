function cardFactory(face, suit) {
    let cardSuit;

    const validFaces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J','Q', 'K', 'A'];
    const validSuits = ['S', 'H', 'D', 'C'];

    if (!validFaces.includes(face) || !validSuits.includes(suit)) {
        throw new Error;
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

console.log(cardFactory('A', 'S'))
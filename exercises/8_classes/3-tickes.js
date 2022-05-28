function tickets(ticketDescription, sortingCriterion) {
    
    class Ticket {
        constructor(destinationName, price, status) {
            this.destination = destinationName;
            this.price = price;
            this.status = status;
        }
    }

    let result = [];

    for (let i = 0; i < ticketDescription.length; i++) {
        let [destination, ticketPrice, ticketStatus] = ticketDescription[i].split('|');
        ticketPrice = Number(ticketPrice);

        let newTicket = new Ticket(destination, ticketPrice, ticketStatus);
        result.push(newTicket);
    }

    if (sortingCriterion === 'status') {
        result.sort(function(a, b) {
            return a.status.localeCompare(b.status);
        })
    } else if (sortingCriterion === 'destination') {
        result.sort(function(a, b) {
            return a.destination.localeCompare(b.destination);
        })
    } else if (sortingCriterion === 'price') {
        result.sort(function(a, b) {
            return a.price - b.price;
        })
    }

    return result;
}

console.log(tickets(['Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'],
    'status'
))
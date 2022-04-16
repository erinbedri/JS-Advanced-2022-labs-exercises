function uppercase(input) {
	let words = input.match(/"[^"]*"|\w+/g);
    let result = [];

    for (let i = 0; i < words.length; i++) {
        result.push(words[i].toUpperCase());
    }

    console.log(result.join(', '));
}

uppercase('Functions in JS can be nested, i.e. hold other functions')
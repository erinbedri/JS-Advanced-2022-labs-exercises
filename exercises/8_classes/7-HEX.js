class Hex {
    constructor(value) {
        this.value = value;
    }

    valueOf() {
        return this.value;
    }

    toString() {
        return '0x' + this.value.toString(16).toUpperCase();
    }

    plus(input) {
        let newValue;

        if (typeof input === 'object') {
            newValue = input.valueOf() + this.value;
        } else {
            newValue = input + this.value;
        }
        return new Hex(newValue);
    }

    minus(input) {
        let newValue;

        if (typeof input === 'object') {
            newValue = this.value - input.valueOf();
        } else {
            newValue = this.value - input;
        }
        return new Hex(newValue);
    }

    parse(string) {
        return parseInt(string, 16)
    }
}


let FF = new Hex(255);
console.log(FF.toString());
FF.valueOf() + 1 == 256;
let a = new Hex(10);
console.log(a)
let b = new Hex(5);
console.log(a.plus(b).toString());
console.log(a.plus(b).toString() === '0xF');
console.log(FF.parse('AAA'));

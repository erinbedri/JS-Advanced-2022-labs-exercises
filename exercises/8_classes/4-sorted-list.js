class List {

    constructor() {
        this._list = [];
        this.size = this._list.length;
    }

    add(element) {
        this._list.push(element);
        this._list.sort(function (a, b) {
            return a - b;
        })
        this.size++;
    }

    remove(index) {
        this._list.sort(function (a, b) {
            return a - b;
        })
        if (index < 0 || index >= this._list.length) {
            throw new Error('Invalid index!')
        }
        this.size--;
        return this._list.splice(index, 1);
    }

    get(index) {
        this._list.sort(function (a, b) {
            return a - b;
        })
        if (index < 0 || index >= this._list.length) {
            throw new Error('Invalid index!')
        }
        return this._list[index];
    }
}

let list = new List();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1)); 
list.remove(1);
console.log(list.get(1));
console.log(list.size)


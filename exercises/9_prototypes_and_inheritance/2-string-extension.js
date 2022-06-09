String.prototype.ensureStart = function (str) {
    if (this.startsWith(str)) {
        return this;
    } else {
        return str + this;
    }
}

String.prototype.ensureEnd(str) = function(str) {
    if (this.endsWith(str)) {
        return this;
    } else {
        return this + str;
    }
}

String.prototype.isEmpty() = function() {
    if (this) {
        return false;
    } else {
        return true;
    }
}

String.prototype.truncate(n) = function(n) {

}


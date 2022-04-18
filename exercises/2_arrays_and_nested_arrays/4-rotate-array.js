function rotate(array, rotations) {
    for (let i = 0; i < rotations; i++) {
        let elementToRotate = array.pop();
        array.unshift(elementToRotate);
    }
    return array.join(' ');
}

console.log(rotate(['1', '2', '3', '4'], 2))
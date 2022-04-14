function circleArea(arr) {
    let result;

    if (typeof arr == 'number') {
        result = (arr ** 2 * Math.PI).toFixed(2);
    } else {
        result = `We can not calculate the circle area, because we receive a ${typeof arr}.`;
    }
    console.log(result)
}

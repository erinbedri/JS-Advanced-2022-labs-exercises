function add(number) {
    let sum = 0;

    function innerSum(num) {
        sum += num;
        return innerSum;
    };

    innerSum.toString = () => {
        return sum;
    }

    return innerSum(number);
}




console.log(add(1)(6)(-3).toString())
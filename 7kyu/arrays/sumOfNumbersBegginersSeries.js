function getSum(a, b) {

    let sum = 0;
    if (a < b) {
        for (let i = a; i <= b; i++) {
            sum += i
        }
        return sum;
    } else {
        for (let i = a; i >= b; i--) {
            sum += i
        }
        return sum;
    }

}

console.log(getSum(0, 3))
console.log(getSum(2, 2))
console.log(getSum(-1, 2))
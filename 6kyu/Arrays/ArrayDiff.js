function arrayDiff(a, b) {
    let finalArray = []

    a.forEach(element => {
        if (!(b.includes(element))) {
            finalArray.push(element)
        }
    });

    return finalArray;
}

console.log(arrayDiff([1, 2, 2, 2, 3], [2]))
console.log(arrayDiff([1, 2], [1]))
console.log(arrayDiff([1, 2, 2], []))
console.log(arrayDiff([1, 2, 3], [1, 2])) 
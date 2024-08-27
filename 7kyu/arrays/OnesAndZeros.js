const binaryArrayToNumber = arr => {
    let binaryString = arr.join('')
    return parseInt(binaryString, 2)
};

console.log(binaryArrayToNumber([0, 0, 1, 0]))
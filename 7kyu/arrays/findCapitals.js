let capitals = function (word) {
    let finalArray = []
    word.split('').filter((letter, index) => {
        if (letter === letter.toUpperCase()) {
            finalArray.push(index)
        }
    })
    return finalArray
};

console.log(capitals('CodEWaRs'))
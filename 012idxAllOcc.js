// find index of all occurance of a char in string
let str = "Four score and seven years ago"
function findOccurrence(char) {
    return [...str].reduce((acc, val, idx) => {
        if (val === char) {
            acc[char].push(idx)
        }
        return acc
    }, {[char]: []})
}
console.log(findOccurrence('e'))
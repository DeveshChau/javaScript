// Find number from string
function findNumber(str) {
    return str.split(" ").filter(val => !isNaN(val)).map(val => parseFloat(val))
}
console.log(findNumber("Surya made 83 from 44"))

// Find number from string using regExp
function useRegex(str) {
    return str.match(/\d+/g)
}
console.log(useRegex("Surya made 83 from 44"))
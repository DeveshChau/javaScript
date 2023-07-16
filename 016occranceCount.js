// Counting number of occurances in an array
const scores = [20, 50, 60, 20, 90, 20]
const countOccurance = function(arr, val) {
    return arr.reduce((acc, ele) => {
        return (val === ele ? acc=acc+1 : acc)
    }, 0)
}
console.log(countOccurance(scores, 20));
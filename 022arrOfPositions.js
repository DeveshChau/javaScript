// Return an array of all positions for given value
let score = [5,4,6,8,5,2,1,3,5]

function allPositions(arr, num) {
    return arr.reduce((acc,val,idx) => (val === num) ? [...acc, idx] : acc, [])
}
console.log(allPositions(score,5));
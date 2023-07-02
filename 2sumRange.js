// console.log(sum(range(1,10)))
// 1.create range function which takes 2 arg
// 2.create local array
// 3.loop from start to end and add that number in array
// 4.return array.
// 5.crate sum function which takes 1 arg.
// 6.write addition of array is done using reduce
const range = function(start, end) {
    let arr = []
    for(let i = start; i<=end; i++) {
        arr.push(i);
    }
    return arr
}

function sum(fn) {
    return fn.reduce((acc, val) => acc+val, 0)
}

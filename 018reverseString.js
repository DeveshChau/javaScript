// reverse a given string
let str = 'abcdefghijklmnopqrstuvwxyz'
function usingReduceRight(str) {
    return [...str].reduceRight((initVal, val) => initVal+val)

}
function usingReverse(str) {
    return [...str].reverse().join('')
}
console.log(usingReduceRight(str));
console.log(usingReverse(str));
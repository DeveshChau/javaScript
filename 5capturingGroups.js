// use capturing groups feature of regular expression.
let arr = ['a,b', 'b,c']
console.log(arr.map((val) => {
    return val.replace(/(\w+),(\w+)/, "$2,$1")
}))
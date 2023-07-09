// counting duplicate element in array
let arr = [10,20,50,60,40,20,10,90,30,40,10,30]
// let ans = {}
// arr.forEach(val => {
//     ans[val] = (ans[val] || 0) + 1
// })

// let ans = arr.reduce((acc, val) => {
//     acc[val] = (acc[val] || 0) + 1
//     return acc
// }, {})

let ans = arr.reduce((acc, val) => (acc[val] = (acc[val] || 0) + 1, acc), {})
console.log(ans)
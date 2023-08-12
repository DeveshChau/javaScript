// Examine post increment operator
let x = 5
let y = x++
console.log(x, y); // 6 5

let p = 5
let q = p++ * 5
console.log(p, q); // 6 25

let a = 5
let b = a++
let c = (b++ % a)
console.log(a,b,c); // 6 6 5
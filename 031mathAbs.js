let a = [5,10,15]
let b = [17,25,30]
let k = 3
let result = 0
a.forEach(element => {
    let j = 0
    while(j < b.length) {
        if (Math.abs(b[j] - element) <= k) {
            break
        }
        j = j+1
        if (j === b.length) {result = result + 1}
    }
});
console.log(result);
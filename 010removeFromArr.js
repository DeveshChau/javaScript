// remove every nth element from array
let num = [1,2,3,4,5,6,7,8,9,10,11,12,13,14]

// for(let i=2;i<num.length;i+=3) {
//     delete num[i]
// }
// num = num.filter(val => val)

num = num.filter((val, idx) => (idx+1)%3 !== 0 )
console.log(num);
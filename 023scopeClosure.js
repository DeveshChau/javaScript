// To understand scope and closure
const score = [5,4,6,8,5]
// here outpit will be index: 5, value: undefined
// for (var i=0; i<score.length;i++) {
//    setTimeout(function() { console.log(`index: ${i}, value: ${score[i]}`)},2000)
// }

// use of iife gives correct result
// for (var i=0; i<score.length;i++) {
//     (function() {
//         var j = i
//         setTimeout(function() { console.log(`index: ${j}, value: ${score[j]}`)},2000)
//     })()
// }

// using j as block scope 
for (var i=0; i<score.length;i++) {
    let j = i
    setTimeout(function() { console.log(`index: ${j}, value: ${score[j]}`)},2000)
}

// using let variable is declared each time of the loop
// so using this, use let at header loop
for (let i=0; i<score.length;i++) {
    setTimeout(function() { console.log(`index: ${i}, value: ${score[i]}`)},2000)
}
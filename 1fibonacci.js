// Create fibonacci sequence for given input
// Input:  1. array of starting 2 numbers
//         2. length of sequence

function fibonacci(start, len=2) {
    if(len <= 1 || isNaN(len)) return console.log('Enter valid length')
    if(!Array.isArray(start) || start.length != 2) return console.log('Enter valid starting sequnce');
    if(len === 2) return console.log(start)
    let i=0, j=1
    while(j < len-1) {
        start.push(start[i]+start[j])
        i++; j++;
    }
    console.log(start)
}

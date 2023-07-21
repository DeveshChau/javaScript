// Make first char uppercase for each entry
// Modify other char only if they all are in uppercase
let str = ['abc', 'xYz', 'PQR']
str = str.map(val => { 
    return val.slice(1).toUpperCase() === val.slice(1) ?
    val[0].toUpperCase()+val.slice(1).toLowerCase() :
    val[0].toUpperCase()+val.slice(1)
})
console.log(str);
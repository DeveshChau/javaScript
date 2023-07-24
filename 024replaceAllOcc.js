// Replace all occreance of word from string.
let str = `Array is an important concept of javascript.
You can find arrays everywhere in javasript. In javascript array is very flexible`

// replace only first occreance of array
let newStr = str.replace('array', 'object')
// using regexp
newStr = str.replace(/array/, 'object')
newStr = str.replace(/array/g, 'object') // global 
newStr = str.replace(/array/gi, 'object') // global and case sensitive
newStr = str.split(/array/i).join('object') // global and case sensitive


console.log(newStr)
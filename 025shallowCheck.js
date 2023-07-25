// check if object are same with shallow check
let obj1 = {1: 1, 2:2, 3: 3}
let obj2 = {1: 1, 2:2, 3: 3}

const hasSameValues = function(obj1, obj2) {
    let objKey = Object.keys(obj1)
    if (objKey.length === Object.keys(obj2).length) {
        return objKey.every(key =>obj2.hasOwnProperty(key) && obj1[key] === obj2[key])
    }
    return false
}
console.log(hasSameValues(obj1, obj2));
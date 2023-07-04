// combine 2 array and remove dublicate
// 1. create a function which takes 2 arrays as input
// 2. Merge two arrays using spread
// 3. convert new array in to set
// 4. convert back set in to array

function combineArray(arr1, arr2) {
    return [...prepareArray(arr1), ...prepareArray(arr2)]
}

function removeDublicate(arr) {
    const mySet = new Set(arr);
    return new Array(...mySet);
}

console.log(removeDublicate(combineArray([1,2,3], [3,4,5])))

// if array containes object

function prepareArray(arr) {
    return arr.map((val) => {
        if(typeof(val) == 'object' && val !== null) {
            return JSON.stringify(val)
        } else {
            return val
        }
    })
}
console.log(removeDublicate(combineArray([1,2,3,{name: 'Devesh'}], [3,4,5,{name: 'Devesh'}])))
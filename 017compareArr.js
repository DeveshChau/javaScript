// check if 2 array have same value in sequence
const mArr1 = [1,2,3,1]
const mArr2 = [1,2,3,1]

function strictEqual(arr1, arr2) {
    return arr1.toString() === arr2.toString();
}

console.log(strictEqual(mArr1,mArr2));

// check if 2 arr have same values, sequence doesn't matter

function createCountObj(arr) {
    return arr.reduce((acc, val) => {
        acc[val] = (acc[val] || 0) + 1
        return acc
    }, {})
}
function compareObj(obj1, obj2) {
    for (const key in obj1) {
        if (Object.hasOwnProperty.call(obj1, key)) {
            if((obj2[key] != obj1[key])) return false
        }
    }
    return true;
}
const countObj1 = createCountObj(mArr1);
const countObj2 = createCountObj(mArr2);
console.log(compareObj(countObj1, countObj2));
let array = [1,2,3,4,[5,6,[7,8]]]
// option 1
console.log(array.flat(2));
let puboutput = []
// option 2
function prepareObj(obj3) {
    obj3.forEach(element => {
        if (typeof element === 'object') {
            prepareObj(element)
        } else {
            puboutput.push(element)
        }        
    });
}
prepareObj(array)
console.log(puboutput);
// option 3
function flattenArray(arg1) {
    return arg1.reduce((acc, val) => {
        return acc.concat(Array.isArray(val) ? flattenArray(val) : val)
    }, [])
}
console.log(flattenArray(array));
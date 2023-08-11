// The for...in statement iterates over the enumerable string properties of an object,
// while the for...of statement iterates over values that the iterable object defines to be iterated over.

Object.prototype.objCustom = function () {}
Array.prototype.arrCustom = function () {}
const iterable = [2,3,5]
iterable.foo = 'baz'
const iterableObj = {
    myName: "Devesh",
    city: "Nashik"
}
console.log("For in array");
for (let i in iterable) {
    console.log(i); // "0","1","2",foo,arrCustom,objCustom
}
console.log("For in array with hasOwn");
for (let i in iterable) {
    if(Object.hasOwn(iterable, i)) {
        console.log(i); // "0","1","2",foo
    }
}
console.log("For of array");
for (let i of iterable) {
    console.log(i); // 2,3,5,baz
}
console.log("For in object");
for (let i in iterableObj) {
    console.log(i); // myName, city, objCustom
}
console.log("For in obj with hasOwn");
for (let i in iterableObj) {
    if(Object.hasOwn(iterableObj, i)) {
        console.log(i); // "0","1","2",foo
    }
}
console.log("For of obj - iterableObj is not iterable");
// for (let i of iterableObj) {
//     console.log(i);
// }

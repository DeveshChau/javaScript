let input = [['male', 'abc', 10], ['female', 'pqr', 20], ['male', 'xyz', 10]]
let a = 'gender'
let b =  'male'
let result = 0
let i = 0
if(a === 'name') {i = 1}
if(a === 'age') {i = 2}

input.forEach(val => {
    if (val[i] === b) {
        result = result + 1
    }
})  
console.log(result);
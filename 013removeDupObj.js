// remove duplicate object from array
const users = [{id:10}, {id:20}, {id:10}]

let mUsers = [...users.reduce((acc,val) => {
    return acc.set(val.id, val)
}, new Map()).values()]
console.log(mUsers);
// add common functionality to constructor function
function User(id, firstName, lastName) {
    this.id = id;
    this.lastName = lastName;
    this.firstName = firstName;
}
User.prototype.fullName = function() {
    return this.firstName + this.lastName
}
const user1 = new User(id= 1, firstName= "xyz", lastName= "xyz")
const user2 = new User(id= 1, firstName= "pqr", lastName= "pqr")

console.log(user1.fullName()) //xyzxyz
console.log(user2.fullName()) //pqrpqr

console.log(User.prototype === user1.__proto__); //true

// __proto__ is property of every variable,
// which points to parent object that it is inhereting from
// prototype is property of constructor function 
// that contains all the stuff which will be inherited by its instance.



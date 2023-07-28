let a = 5
console.log(this.a); //undefined
// *******************************

function myFunction() {
    console.log(this)
}
myFunction(); // window object
// *******************************

const myFun=()=> {
    console.log(this)
}
myFun(); // window object
// *******************************

let user = {
  myname: "Devesh",
  age: 24,
    getDetails() {
        console.log(this.myname); 
    }
};
user.getDetails()
//Devesh
// *******************************

let user1 = {
  myname: "Devesh",
  age: 24,
    childObj:{
        newName:"Roadside Coder",
        getDetails() {
            console.log(this.newName, "and" ,this.myname, this.age);
        }
    }
};
user1.childObj.getDetails()

//Roadside Coder and undefined undefined
// *******************************


let user2 = {
    myname: "Devesh",
    age: 24,
      getDetails: () => {
          console.log(this.myname, this.age); 
      }
  };
  user2.getDetails()
// undefined undefined
// *******************************


let user3 = {
    name: "Devesh",
    age: 24,
      getDetails() {
          const nestedArrow = () => console.log(this.name); 
          nestedArrow();
      }
  };
  user3.getDetails()
//Devesh
// *******************************

class User {
    constructor(n){
        this.name = n
    }
    getName(){
        console.log(this.name);
    }
}

const user4 = new User("Devesh") // => This will generate a user object from the above class
user4.getName();
// Devesh 
// *******************************

const user5 = {
    firstName: 'Devesh!',
    getName() {
      const firstName = 'Chaudhari';
      return this.firstName;
    }
  };
  console.log(user5.getName());
// Devesh
// *******************************



const user6 = { 
    myname: 'Devesh!', 
    logMessage() { console.log(this.myname)}
};
user6.logMessage()
setTimeout(user6.logMessage, 1000);

// After a delay of 1 second, `undefined` is logged to console. 

// While `setTimeout()` function uses the `object.logMessage` as a callback, still, it invokes `object.logMessage` as a regular function, rather than a method.

// And during a regular function invocation *this* equals the global object which is `window` in the case of the browser environment.

// That's why `console.log(this.message)` inside `logMessage` method logs `window.message`, which is `undefined`.
// *******************************






const user7 = { 
    myname: 'Devesh',
    greet() { return `Hello, ${this.myname}!` },
    farewell: () => { return `Goodbye, ${this.myname}!` } 
}; 
console.log(user7.greet());
console.log(user7.farewell());
// Hello Devesh
// Goodbye undefined 
// *******************************


var length = 4; 
function callback() { console.log(this.length); } 
const object = { 
    length: 5, 
    method(callback) { 
        callback(); 
    } 
}; 
object.method(callback);
4
// *******************************


var length = 4;
function callback() { console.log(this.length)}
const object1 = { 
    length: 5, 
    method() { arguments[0]() } 
}; 
object1.method(callback,1,2)
// 3
let calc = { 
    total: 0,
    add(a) { this.total += a; return this; },
    subtract(a) { this.total -= a; return this; },
    multiply(a) { this.total *= a; return this; }
};

const result = calc.add(10).multiply(5).subtract(30).add(10)
console.log(result.total)
//30














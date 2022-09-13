// Objects are a type of varibale, quite similar to arrays but they have something called key pair value 
// in python it is dictionary 

// A property is just one of the key value pair 

// ---PROPERTIES---
// person.name = 'Abhishek'
// person.shirt = 'White'

// Empty Object
const Emp = {

}
// creating an object called person 
const person = {
    name: "Abhishek",
    age: "18",
    shirt: "White",
    asset: 100000,
    liabilities: 10000,
    networth: function (){
        return this.asset - this.liabilities 
    }

}


// properties of this object 
// Syntax --> 
console.log(person.name) // dot notation
console.log(person['age']) // bracket notation 

// add a new value in the object 
person.phone = "8383068749"

// or 
person.loc = ['Delhi']

console.log(person)

// Object {}
// they are key: value pair
const person2 = {
    name : "Joe",
    shirt : "Balck"
}

person2.age = "21"
console.log(person2)

const myintro = (person) =>{
    console.log("My name is "+person.name+", I am "+person.age+" yrs old"+". And my Net worth is INR "+person.networth())
}

myintro(person)

// Object PROPERTIES --> person.name
// Object Function --> person.name()



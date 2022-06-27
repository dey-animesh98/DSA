/**
 * 🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴
 * ⚠️⚠️JavaScript is not a class-based object-oriented language. But it still has ways of using object oriented programming (OOP)⚠️⚠️
 * 
 * Summary MDN**************************
    This article has described the basic features of class-based object oriented programming, 
    and briefly looked at how JavaScript constructors and prototypes compare with these concepts.

    In the next article, we'll look at the features JavaScript provides to support class-based object-oriented programming.
****************************************************************************************************************

 * 
 * Object-oriented programming is about modeling a system as a collection of objects, where each object represents some particular aspect of the system.
 * 
 * There have been some questions about whether or not JavaScript is an object-oriented language.
 *  Even a statement, "just because a language has objects doesn't make it OO."
 * 
 * Oriented is based on two requirements:
    1. its capability to model a problem through objects
    2. its support of a few principles that grant modularity and code reuse

    🔘  constructors in JavaScript provide us with something like a class definition, enabling us to define the "shape" of an object, 
    including any methods it contains, in a single place.

    🔘 the prototype chain seems like a natural way to implement inheritance. For example, if we can have a Student object whose prototype is Person,
     then it can inherit name and override introduceSelf().

    The prototype chain's behavior is less like inheritance and more like delegation. Delegation is a programming pattern where an object,
    when asked to perform a task, can perform the task itself or ask another object (its delegate) to perform the task on its behalf.
    In many ways, delegation is a more flexible way of combining objects than inheritance 
    (for one thing, it's possible to change or completely replace the delegate at run time).

 */


//Object literal are construct using a constructor function. constructor is a template
//In-built object literals are  'new Date()'

//Object
let obj = {
    car: "honda",
    color: "white",
    run: function () {
        console.log("Running")

    }
}

//Object Literals
function generalCar(givenName, givenColor) {
    this.name = givenName
    this.color = givenColor
    this.run = function () {
        console.log(`${this.name} is running`)
    }
}

let car1 = new generalCar("honda", "white")
let car2 = new generalCar("skoda", "blue")
console.log()
car1.run()

//Closure concepts

/**
 * 
 * What is closures ?
 * Function along with lexical scope bundled together forms a closure.
 * Closure :Function bundled with its lexical environment is known as a closure. Whenever function is returned, 
 * even if its vanished in execution context but still it remembers the reference it was pointing to. 
 * Its not just that function alone it returns but the entire closure and that's where it becomes interesting !!
 * 
 */
function a1(){
    let x = 2
    function a2() {
        console.log(x)
    }
    x = 5
    return a2
}
let b1 = a1()
// console.log(b1) //f(a2)

b1() //2 closure concept



let myObj = {
    name: "Ram",
    age: 27,
    vehicles: {
        car: "limousine",
        bike: "ktm-duke",
        airlines: {
            lufthansa: {
                model: "Air123",
                capacity: 180
            },
            British_airways: {
                model: "AirBus 321",
                capacity: 190
            }
        }
    }
}
let res = { ...myObj }//rest operator/ Deep Copy
let { name, age, vehicles } = myObj

// console.log(vehicles.airlines.lufthansa.model)
// console.log(res.vehicles.airlines.British_airways.capacity)


function foo() {
    return{

        1:"bar"
    }
        
}
console.log(foo())

let arr = []

arr[2] ="val"
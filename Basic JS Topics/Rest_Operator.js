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
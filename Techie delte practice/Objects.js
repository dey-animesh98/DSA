let obj = {
    nam: "Ad",
    age: 23,
    run: function runner() {
        console.log("Running named regular")
    },

    run2: function () {
        console.log("Running Anonomous Regular")
    },

    // run3: runner2() => {
    //     console.log("Running named arrow")
    // },

    run4: () => {
        console.log("Running Anonomous arrow")
    }

}

{
    

let obj = {
    Language: "Javascript",
    DOB: 1995,

    run1: function runner() {
        console.log(this)
        console.log(this.Language) //Javascript
        console.log("Running named regular")
    },

    run2: function () {
        console.log(this)
        console.log(this.Language) //Javascript
        console.log("Running Anonomous Regular")
    },

    run3: () => {
        console.log(this)
        console.log(this.Language) //undefined
        console.log("Running Anonomous arrow")
    }

}

obj.run1()
obj.run2()
obj.run3()

'use strict'
// console.log(this) //Window object

function myFunc() {
    console.log("---",this)   
}
myFunc()

let myArrow = ()=>{
    console.log(this)
}
myArrow()


let newObj = {
    city : "Kolkata",
    state :"WB"
}

let newObj2 = {
    city : "Pune",
    state :"MH"
}

function getCity() {
    console.log(this.city)
}
getCity()



function getCity2() {
    console.log(this.city)
}

getCity2.call(newObj)

}
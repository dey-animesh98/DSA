class myName {
    constructor(Age, Gender) {
        console.log("Hi, I am Animesh")
        this.age = Age
        this.gender = Gender
    }
    getBio() {
        return `My age is ${this.age} and I am ${this.gender}`
    }
}

let name1 = new myName(23, "male")
let name2 = new myName(24, "boy")

//  console.log(name1,name2)
console.log(name1.getBio())
console.log(name2.getBio())

class User {
    constructor(firstName, lastName, Age, Gender) {

        this.firstName = firstName
        this.lastName = lastName
        this.age = Age
        this.gender = Gender
    }
    getBio() {
        return `Hi I am ${this.firstName} and I am ${this.age} years old ${this.gender}.`
    }
    getFullName() {
        return `My fullname is ${this.firstName} ${this.lastName}`
    }

    editName(firstName, lastName) {
        this.newFname = firstName
        this.newLname = lastName
        return `My new name is ${this.newFname} ${this.newLname}`
    }

    singleName(fullName) {
        let splitName = fullName.split(' ')
        if (splitName.length === 3) {
            this.fname = splitName[0]
            this.mname = splitName[1]
            this.lname = splitName[2]
            return `My name with mid is ${this.fname} ${this.mname} ${this.lname}`
        } else {
            this.fname = splitName[0]
            this.lname = splitName[1]
            return `My name without mid is ${this.fname} ${this.lname}`
        }
    }
}

let ani = new User('Animesh', 'Dey', 23, "boy")
// console.log(name1)
console.log(ani.getBio())
console.log(ani.getFullName())
console.log(ani.editName('Ani', 'De'))
console.log(ani.singleName('Aniket Kumar Das'))
console.log(ani.singleName('Aniket Das'))





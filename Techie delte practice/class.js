class Outer {
    constructor() {
        this.age = 0
        this.fname = "Abc"
    }

    inner() {
        this.age++;
        console.log( `${this.age}`)
    }
}

const call = new Outer()
call.inner()
call.inner()
call.inner()
call.inner()
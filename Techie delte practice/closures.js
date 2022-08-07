function outer() {

    let x = 0
    function inner() {
        x++
        console.log(x)
    }
    console.log('outer')
    return inner
}

// let call = outer()
// call();
// call();
// call();
// call();
// call();
// call();
// call();


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

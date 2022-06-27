function* gen() {
    console.log("running")
    yield 'paused'
    console.log("Resumed")
    return 'stopped'
}
let loger = gen()
loger.next()
loger.next()


//Generator are iterable
function* iteration() {
    yield "a"
    yield "b"
    yield "c"
}
for (const ele of iteration()) {
    // console.log(ele.toUpperCase())
    
}

// console.log([...iteration()])


let i = 1
function rec() {
    console.log("Hello", i)
    i++
    rec()

}
// rec()

function factorial(n) {
    return n === 0 ? 1 : n * factorial(n - 1)
}
// console.log(factorial(5))

function myFun(a){

    return `Hi ${a}`
}
console.log(myFun("ani"))
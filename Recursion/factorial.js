function factorial(n) {
    return n === 0 ? 1 : n * factorial(n - 1)
}
// console.log(factorial(5))

{
    function fact(n) {
        // base
        if (n <= 0) return "enter a valid number"
        if (n === 1) return 1
        //recursion
        return n * fact(n - 1)
    }
    console.log(fact())
}
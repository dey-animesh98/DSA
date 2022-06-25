let i = 1
function rec() {
    console.log("Hello", i)
    i++
    rec()

}
// rec()        //Maximum call stack size exceeded

function printN(n) {
    if (n > 0) {
        printN(n - 1)
    }
    console.log(n)
}
// printN(10)

{
    function divBy5(arr) {
        if (arr.length == 0) return
        else {
            let ele = arr.pop()
            if (ele % 5 == 0) {
                console.log(ele)
            }
        }
        divBy5(arr)
    }
    // divBy5([10,11,14,20,21,25])
}
{
    function addUpto(n) {
        if (n == 1) return 1
        return (n + addUpto(n - 1))
    }
    // console.log(addUpto(5))
}

{
    function printDec(n) {
        if (n == 0) {
            return
        }
        console.log(n)
        printDec(n - 1)
        console.log(n)
    }
    // printDec(5)

}

{
    function printNum(n) {
        if (n == 5) {
            console.log(n)
            return
        }
        console.log(n)
        printNum(n + 1) // aka Tail recursion - single function at last.
    }
    // printNum(1)
}8

{
    function sumDigit(n, rev = 0) {
        if (n > 0) {
            return sumDigit(parseInt(n / 10), rev * 10 + n % 10)
        }
        return rev
    }

    console.log(sumDigit(2345))
}


//Reverse string-1
{
    function rev(str) {
        if (str.length <= 0) return str
        return rev(str.slice(1)) + str[0]
    }
    // console.log(rev("hello"))
}
//str[L]==str[R] ret fun(str,L++,R--)

{
    function rev(str, n) {
        let r = ""
        if (n <= 0) return str
        return r + rev(str[n])
    }
    let str = "hello"
    let n = str.length
    // console.log(rev(str, n))
}

{//Real method
    function revNum(num, res = 0) {
        if (num > 0) {
            return revNum(parseInt(num / 10), res * 10 + num % 10)
        }
        return res
    }
    // console.log(revNum(1))
}

{//method -2
    function rev2(n) {
        let digits = Math.ceil(Math.log10(n))
        return helper(n, digits)
    }
    function helper(n, digits) {
        if (n < 10) {
            return n
        }
        let rem = n % 10
        return rem * (Math.pow(10, digits - 1)) + helper(Math.floor(n / 10), digits-1)

    }
console.log(rev2(5678))
}
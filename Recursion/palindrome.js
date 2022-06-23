{
    function isPalin(str) {
        if (str.length == 1) return true
        if (str[0] == str[str.length - 1]) return isPalin(str.slice(1, -1))
        else return false

    }
    // console.log(isPalin('12354321'))
}
// Palindrome method -2
{
    function isPalin2(str, start, end) {
        if (start < end) {
            if (str[start] === str[end]) {
                return isPalin2(str, start + 1, end - 1)
            } else {
                return false
            }
        }
        return true
    }
    let st = '1235321'
    // console.log(isPalin2(st, 0, st.length - 1))
}

//Palindrone num
{
    function revNumber(num, res = 0) {
        if (num > 0) {
            return revNumber(parseInt(num / 10), res * 10 + num % 10)
        }
        return res
    }
    
}
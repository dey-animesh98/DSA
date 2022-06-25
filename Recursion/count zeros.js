//Count the number of zeros in the interger
{//iteration
    function countZero(n) {
        let count = 0
        while (n !== 0) {
            let rem = n % 10
            if (rem === 0) {
                count++
            }
            n = Math.floor(n / 10)
        }
        return count
    }
    // console.log(countZero(2501010))
}

{//recursion
    function countZero2(n) {
        return helper(n, 0)

    }
    function helper(n, count) {
        if (n === 0) {
            return count
        }
        let rem = n % 10
        if (rem === 0) {
            return helper(Math.floor(n / 10), count + 1)
        }
        return helper(Math.floor(n / 10), count)
    }

    // console.log(countZero2(10100110))
}
{
    var numberOfSteps = function (num) {
        return helper(num, 0)
    }
    function helper(num, count) {
        if (num === 0) return count
        if (num % 2 === 0) {
            return helper(Math.floor(num / 2), count + 1)
        }
        return helper(num - 1, count + 1)
    }
    console.log(numberOfSteps(14))
}
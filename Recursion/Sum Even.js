// Sum of even numbers within the range
{
    function sumEven(n) {
        //Base Case
        if (n < 2) return 0
        if (n === 2) return 2
        if (n % 2 === 1) n = n - 1
        //Recursive call
        return n + sumEven(n - 2)
    }
    console.log(sumEven(2))
}
// Sum of even numbers between given range the range
{
    function sumEven2(n1, n2) {
        //Base
        if (n1 > n2) return "Enter valid Range"
        if (n1 == n2) return n1
        if (n1 % 2 === 1) n1 = n1 + 1
        if (n2 % 2 === 1) n2 = n2 - 1
        //Recursion
        return n2 + sumEven2(n1, n2 - 2)

    }
    console.log(sumEven2(0, 10))

}
//Sum of all evens of the given count
{
    function sumEven3(n) {
        if (n === 1) return 0
        if (n <= 0) return false
        return 2 * n - 2 + sumEven3(n - 1)
    }
    console.log(sumEven3(4)) //Will give first 4 even nums

}
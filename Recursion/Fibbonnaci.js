// Find the nth fibbonacci NUmber
//This is Linear type Recursion
// f(n) = f(n-1)+f(n-2)
{

    function fibo(n) {
        if (n < 2) {
            return n
        }
        return fibo(n - 1) + fibo(n - 2)
    }
    // console.log(fibo(4)) //If input > 50 then we'll not the answer .this exponential time complexity
}


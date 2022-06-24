// Find the nth fibbonacci NUmber
//This is Linear type Recursion
// f(n) = f(n-1)+f(n-2)

{//If input > 50 then we'll not the answer .this exponential time complexity

    function fibo(n) {
        if (n <= 2) {
            return 1
        } else {
            return fibo(n - 1) + fibo(n - 2)
        }
    }
    //  console.log(fibo(100)) 

}


{//memoization with dp // Eliminate exppnential time complexity

    function fibo(n, dp = []) {
        if (dp[n] != null) {
            return dp[n]
        }
        let res
        if (n <= 2) {
            res = 1
        } else {
            res = fibo(n - 1, dp) + fibo(n - 2, dp)
        }
        dp[n] = res
        return res
    }
    console.log(fibo(1000))
}




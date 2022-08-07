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
    console.log(fibo(2))

}


{//memoization with dp // Eliminate exppnential time complexity

    function fib(n, dp = []) {
        if (dp[n]) return dp[n]
        if (n <= 0) return 0
        if (n <= 2) return 1
        let res = fib(n - 1, dp) + fib(n - 2, dp)
        dp[n] = res
        return res
    }
    console.log(fib(100))
}


/**
 * 
https://leetcode.com/problems/subsets/
https://leetcode.com/problems/fibonacci-number/
https://leetcode.com/problems/subsets-ii/
https://practice.geeksforgeeks.org/problems/sum-of-digit-is-pallindrome-or-not2751/1
https://www.geeksforgeeks.org/reverse-a-stack-using-recursion/
https://leetcode.com/problems/powx-n/
Combination Sum , Combination Sum II (Leetcode)
https://leetcode.com/problems/palindrome-partitioning/ (To attempt when above complete)
 */

/**
https://leetcode.com/problems/sliding-window-maximum/
https://practice.geeksforgeeks.org/problems/maximum-of-minimum-for-every-window-size3453/1
https://practice.geeksforgeeks.org/problems/longest-k-unique-characters-substring0853/1
https://leetcode.com/problems/longest-substring-without-repeating-characters/
https://leetcode.com/problems/minimum-window-substring/
https://leetcode.com/problems/longest-repeating-character-replacement/
https://practice.geeksforgeeks.org/problems/kadanes-algorithm-1587115620/1

 */
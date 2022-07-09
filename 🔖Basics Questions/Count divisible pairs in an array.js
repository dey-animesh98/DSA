/**
 * Given an array A of N integers, find the pairs (A[i], A[j]) in the array such that one element of pair divides other for all 0 ≤ i < j < N.
Input:
    3
    1 2 3
Output:
    2
    Input
4
2 3 5 7
Expected Output 
0
5
3 3 3 3 3
Expected Output 
10
4
1 2 3 9
Expected Output 
4
Explanation: The two pairs are (1, 2) and (1, 3),
                       In (1, 2), 1 divides 2, and
                       In (1, 3), 1 divides 3
 */


//--
function solution(a, arr) {
    //Write your solution here
    let count = 0
    for (let i = 0; i < a - 1; i++) {
        for (let j = i + 1; j < a; j++) {
            if (arr[i] % arr[j] === 0 || arr[j] % arr[i] === 0) count++
        }
    }
    return count
}
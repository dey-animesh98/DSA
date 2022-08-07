/**Given an unsorted integer array, find a pair with the given sum in it.

For example,

Input:
 
nums = [8, 7, 2, 5, 3, 1]
target = 10
 
Output:
 
Pair found (8, 2)
or
Pair found (7, 3)
 
 
Input:
 
nums = [5, 2, 6, 8, 1, 9]
target = 12
 
Output: Pair not found
*/
// O(n^2)
function findPairs(arr, tar) {
    let pairs = []
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === tar) pairs.push([arr[i], arr[j]])
        }
    }
    return pairs
}

console.log(findPairs([16, 8, 7, 2, 5, 3, 1, -6], 6))

//O(n log(n))
function findPairs2(arr, tar) {
    arr.sort((a, b) => a - b)
    let left = 0, right = arr.length - 1, pairs = []

    while (left < right) {
        if (arr[left] + arr[right] === tar) {
            pairs.push([arr[left],arr[right]])
            left++
            right--
        }
        if (arr[left] + arr[right] < tar) {
            left++
        }
        if (arr[left] + arr[right] > tar) {
            right--
        }
    }

    return pairs
}
console.log(findPairs2([16, 8, 7, 2, 5, 3, 1, -6], 6))
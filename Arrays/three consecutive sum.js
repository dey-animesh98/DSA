// to calculate the max sum of three consecutive elements in array

function maxSum(arr, k) {
    let maxSum = 0, currSum = 0

    for (let i = 0; i < k; i++) {
        currSum += arr[i]
    }
    maxSum = currSum
    for (let j = 0; j < arr.length - k; j++) {
        currSum = currSum - arr[j] + arr[j + k]
        if (currSum > maxSum) {
            maxSum = currSum
        }
    }
    return maxSum
}

console.log(maxSum([2, 5, 1, 6, 7, 6, 7, 15, 15, 1, 430], 3))
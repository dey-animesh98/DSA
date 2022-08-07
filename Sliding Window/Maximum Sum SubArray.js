//Kadaen's Algorithm

{
    function maxSumSubArr(arr) {
        let currSum = 0, maxSum = -Infinity
        for (let i = 0; i < arr.length; i++) {
            currSum += arr[i]
            maxSum = currSum > maxSum ? currSum : maxSum
            currSum = currSum < 0 ? 0 : currSum
        }
        return maxSum
    }
    console.log(maxSumSubArr([-2, 1, -3, 4, -1, 2, 1, -5, 4]))
}


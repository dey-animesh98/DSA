//Using Two pointer approach Find the  pair from a sorted array thats sum in equal to target.

{//Brute Force O(n^2) Loop Runs [n*(n-1)/2] times
    function findPair(arr, target) {
        for (let i = 0; i < arr.length - 1; i++) {
            for (let j = 1; j < arr.length; j++) {
                if (arr[i] + arr[j] == target)
                    return [arr[i], arr[j]]
            }
        }
        return [-1, -1]
    }
    // console.log(findPair([-8, -6, -4, -2, 1, 3, 4, 6, 7, 9],5))

}

{//O(n)
    function findPair(arr, target) {
        let left = 0
        let right = arr.length - 1
        let res = [-1, -1]
        while (left < right) {
            if (arr[left] + arr[right] == target) {
                res = [arr[left], arr[right]]
                break;             //Also can return directly when sum is equal to target then we dont need break and res variable
            }
            if (arr[left] + arr[right] > target) {
                right--
            } else {
                left++
            }
        }
        return res
    }
    // console.log(findPair([-8, -6, -4, -2, 1, 3, 4, 6, 7, 9],5))
}

//Find pair that sum is closest to target
{//O(n)
    function findClosestSum(arr, target) {
        let prox = Number.MAX_SAFE_INTEGER, left = 0, right = arr.length - 1, res = []
        while (left < right) {
            let val = Math.abs(arr[left] + arr[right] - target)
            console.log(val)
            if (val < prox) {
                res = [arr[left], arr[right]]
                prox = val
            }
            if (arr[left] + arr[right] - target > 0) {
                right--
            }else {
                left++
            }
        }
        return res
    }
    console.log(findClosestSum([-4, -2, 1, 3, 4, 6, 9], 5))
}




//Divide array in two parts
//Get both parts sorted by recursion
//After sorting merge those by two pointer

//Off-place merge sort; Return new array

//Best for large input
{
    const merge = function (left, right) {
        let result = []
        let i = 0
        let j = 0
        while (i < left.length && j < right.length) {
            if (left[i] <= right[j]) {
                result.push(left[i])
                i++
            } else {
                result.push(right[j])
                j++
            }
        }
        while (i < left.length) {
            result.push(left[i])
            i++
        }
        while (j < right.length) {
            result.push(right[j])
            j++
        }
        return result
    }

    const sortArray = function (nums) {
        if (nums.length === 1) return nums
        let mid = Math.floor(nums.length / 2)

        let left = sortArray(nums.slice(0, mid))
        let right = sortArray(nums.slice(mid))

        return merge(left, right)
    };

    // console.log(sortArray([5, 1, 3, 6, 1, 8, 2, 4, 3, 45, 0, 18, -6, 1, 3]))
}

//--

function conquer(arr, low, mid, high) {
    let merged = []
    let index1 = low
    let index2 = mid + 1

    while ((index1 <= mid && index2 <= high)) {
        if (arr[index1] <= arr[index2]) {
            merged.push(arr[index1++])
        } else {
            merged.push(arr[index2++])
        }
    }

    while (index1 <= mid) {
        merged.push(arr[index1++])
    }
    while (index2 <= high) {
        merged.push(arr[index2++])
    }

    for (let i = 0, j = low; i < merged.length; i++, j++) {
        arr[j] = merged[i]
    }
    return merged
}

function divide(arr, low, high) {
    if (low >= high) {
        return
    }

    let mid = parseInt(low + (high - low) / 2)
    divide(arr, low, mid)
    divide(arr, mid + 1, high)
    conquer(arr, low, mid, high)
    return arr
}

let arr = [5, 2, 9, 1, 3, 8, -1, 0, 7, 12, -122, 255, 130, 5, 7, 9, 11, 13, 15, 14, 12, 10, 8, 6, 2]
let n = arr.length
console.log(divide(arr, 0, n - 1))
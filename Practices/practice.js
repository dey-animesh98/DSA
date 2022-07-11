//sorting of 0 & 1

function so(arr) {
    let curr = 0, countZ = 0
    for (let ele of arr) {
        if (ele === 0) countZ++
    }

    let count1 = arr.length - countZ

    while (countZ > 0) {
        arr[curr] = 0
        curr++
        countZ--
    }

    while (count1 > 0) {
        arr[curr] = 1
        curr++
        count1--
    }
    return arr
}

// console.log(so([0, 1, 0, 0, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 0]))

function so1(arr) {

    let left = 0, right = arr.length - 1

    while (left < right) {

        while (arr[left] === 0 && left < right) {
            left++
        }
        while (arr[right] === 1 && left < right) {
            right--
        }
        if (left < right) {
            [arr[left], arr[right]] = [arr[right], arr[left]]

        }

    }
    return arr
}
// console.log(so1([0, 1, 0, 0, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 0]))


//Quick Sort
{
    function partition(arr, low, high) {
        let pivot = arr[high]
        let i = low - 1

        for (let j = low; j < high; j++) {
            if (arr[j] < pivot) {
                i++
                [arr[i], arr[j]] = [arr[j], arr[i]]
            }
        }
        i++
        arr[high] = arr[i]
        arr[i] = pivot
        return i

    }

    function quick(arr, low, high) {
        if (low < high) {
            let pivotIndex = partition(arr, low, high)

            quick(arr, low, pivotIndex - 1)
            quick(arr, pivotIndex + 1, high)
        }
        return arr
    }

    let arr = [3, 2, 4, 8, 7, 1, 6]
    let n = arr.length
    // console.log(quick(arr, 0, n - 1))
}



//merge sort

function conquer(arr, low, mid, high) {
    let merged = []
    let index1 = low
    let index2 = mid + 1

    while (index1 <= mid && index2 <= high) {
        if (arr[index1] < arr[index2]) {
            merged.push(arr[index1++])
        } else {
            merged.push(arr[index2++])
        }
    }

    while (index1 <= low) {
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
    let mid = Math.floor(low + (high - low) / 2)
    divide(arr, low, mid)
    divide(arr, mid + 1, high)
    conquer(arr, low, mid, high)
    return arr
}
let arr = [5, 2, 9, 1, 3, 8, -1, 0, 7, 12, -122, 255, 130, 5, 7, 9, 11, 13, 15, 14, 12, 10, 8, 6, 2]
let n = arr.length
console.log(divide(arr, 0, n - 1))
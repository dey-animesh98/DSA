function swap(arr, i, j) {
    return [arr[i], arr[j]] = [arr[j], arr[i]]
}

function sort(arr) {
    let start = 0, mid = 0, end = arr.length - 1
    let pivot = 1
    while (mid <= end) {
        if (arr[mid] < pivot) {
            swap(arr, start, mid)
            start++
            mid++
        } else if (arr[mid] > pivot) {
            swap(arr, mid, end)
            end--
        } else {
            mid++
        }
    }
    return arr
}

console.log(sort([2,1,0,2,1,1,0,2,0,1,0,0]))
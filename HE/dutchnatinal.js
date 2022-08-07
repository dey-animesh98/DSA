function swap(arr, i, j) {
    return [arr[i], arr[j]] = [arr[j], arr[i]]
}

function sort(arr) {

    let start = 0, curr = 0, end = arr.length - 1
    let pivot = 1

    while (curr <= end) {
        if (arr[curr] < pivot) {
            swap(arr, start, curr)
            start++
            curr++
        } else if (arr[curr] > pivot) {
            swap(arr, curr, end)
            end--
        } else {
            curr++
        }
    }
    return arr
}

console.log(sort([2, 0, 1, 0, 1, 2, 0, 0, 1, 2, 0, 2, 0, 1, 0, 2, 1, 0, 2, 1, 0, 2, 1, 0, 2, 1, 0]))
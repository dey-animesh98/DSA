function checkSort(arr) {
    let i = 0, j = arr.length - 1
    if (arr[i] <= arr[j]) {
        while (i < arr.length - 1) {
            if (arr[i] <= arr[i + 1]) i++
            else return false
        }
        return "Ascending"
    } else {
        while (i < arr.length - 1) {
            if (arr[i] >= arr[i + 1]) i++
            else return false
        }
        return "Descending"
    }


}

// console.log(checkSort([2, 9, 32, 50, 78, 78, 85, 90]))
// console.log(checkSort([87, 72, 68, 55, 47, 31, 22, 22, 22, 19, 8, 2]))
// console.log(checkSort([8, 8, 8, 8, 8, 8, 8, 8, 8]))


//Recursion
function checkSortRecursion(arr,i) {
    if (i === arr.length-1) {
        return true
    }
    return arr[i] <= arr[i+1] && checkSortRecursion(arr, i+1)
}

console.log(checkSortRecursion([2, 9, 32, 50, 78, 78,78,78, 85, 88],0))
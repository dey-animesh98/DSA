//bubble sort

function bub(arr) {
    for (let i = 0; i < arr.length; i++) {
        let sort = true
        for (let j = 1; j < arr.length - i; j++) {
            if (arr[j] < arr[j - 1]) {
                [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]]
                sort = false
            }
        }
        if (sort) break;
    }
    return arr
}
// console.log(bub([5,7,8,4,3,6]))
// console.log(bub([2,0,10,5,156,-10,1,10,1,1,1,1,2,2,226,220,218]))

//Insertoin sort
function inser(arr) {

    for (let i = 1; i < arr.length; i++) {
        let curr = i
        while (curr >= 1 && arr[curr] < arr[curr - 1]) {
            [arr[curr], arr[curr - 1]] = [arr[curr - 1], arr[curr]]
            curr--
        }
    }
    return arr
}
// console.log(inser([5, 7, 8, 4, 3, 6]))
// console.log(inser([2, 0, 10, 5, 156, -10, 1, 10, 1, 1, 1, 1, 2, 2, 226, 220, 218]))
{
    //Quick sort
    function partition(arr, low, high) {
        let pivot = arr[high]
        let i = low - 1

        for (let j = low; j < arr.length; j++) {
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
    // let arr = [5, 9, 8, 4, 3, 6, 7,10]
    let arr = [2, 0, 10, 5, 156, -10, 1, 10, 1, 1, 1, 1, 2, 2, 22, 135, 218]
    let n = arr.length
    // console.log(quick(arr, 0, n - 1))
}


// /merge sort

function conquer(arr, low, mid, high) {
    let merged = []
    let index1 = low
    let index2 = mid+1

    while (index1 <= mid && index2 <= high) {
        if (arr[index1] <= arr[index2] ) {
            
        }
    }
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
let arr = [2, 0, 10, 5, 156, -10, 1, 10, 1, 1, 1, 1, 2, 2, 226, 220, 218]
let n = arr.length
console.log(divide(arr, 0, n - 1))


//inse

/**
 * foor loop start from 1
 * curr = i
 * if(curr > = i && arr[curr] < arr[curr-1])
 * //swap
 * curr--
 * 
 */

//quick
/**
 * basic cond in quick 
 * if(low < high)
 * pivotidx = partion(arr, low high)
 * 
 * quick(arr, low, pivotidx-1)
 * quick (arr, pivotidx+1, high)
 * 
 * 
 * partition
 * pivot = arr[high]
 * i = low-11
 * 
 * for(let j = low; j < arr.len; j++)
 * if(arr[j] < pivot)
 * 
 * i++
 * swap arr[i] & arr[j]
 * 
 * out of loop
 * i++
 * arr[high] = arr[i]
 * arr[i] = pivot
 * ret i 
 */
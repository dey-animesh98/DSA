// let a=2
// let b =['2']
// console.log(a*b)
// console.log(b*['2'])
// console.log(b*['2','2'])
// console.log(b*parseInt(['2','2']))


//merge sort
//Count number of 1's without comparison operator 
function countOne(arr) {
    let count = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]) {
            count++
        }
    }
    return count
}

// console.log(countOne([1, 0, 1, 1, 0, 0, 1]))

//[9,0,8,0,3,2,0,1,0]==> Make all zero's right side
//[9,8,3,2,1,0,0,0,0]-

function swapZeros(arr) {
    let count0 = 0, res = []

    for (let ele of arr) {
        if (ele !== 0) {
            res.push(ele)
        } else {
            count0++
        }
    }

    while (count0) {
        res.push(0)
        count0--
    }
    return res
}

// console.log(swapZeros([9,0,8,0,3,2,0,1,0]))

//merge sort


function conquer(left, right) {
    let res = [], i = 0; j = 0
    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            res.push(left[i])
            i++
        } else {
            res.push(right[j])
            j++
        }
    }

    while (i < left.length) {
        res.push(left[i])
        i++
    }

    while (j < right.length) {
        res.push(right[j])
        j++
    }

    return res
}


function divide(arr) {
    if (arr.length === 1) return arr
    let mid = Math.floor(arr.length / 2)
    let left = divide(arr.slice(0, mid))
    let right = divide(arr.slice(mid))

    return conquer(left, right)
}
let arr = [56, 10, -2, 15, 15, 9, 0, 1, 7, 3, 25]
// console.log(divide(arr))


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

    function QuickSort(arr, low, high) {

        if (low < high) {
            let pivotIdx = partition(arr, low, high)
            QuickSort(arr, low, pivotIdx - 1)
            QuickSort(arr, pivotIdx + 1, high)
        }
        return arr
    }
    let arr = [56, 10, -2, 15, 15, 9, 0, 1, 7, 3, 25]
    let n = arr.length
    // console.log(QuickSort(arr, 0, n - 1))
}

//Insertion Sort
{

    function InsertionSort(arr) {

        for (let i = 1; i < arr.length; i++) {
            let curr = i
            while (curr >= 1 && arr[curr] < arr[curr - 1]) {
                [arr[curr], arr[curr - 1]] = [arr[curr - 1], arr[curr]]
                curr--
            }
        }
        return arr
    }
    let arr = [56, 10, -2, 15, 15, 9, 0, 1, 7, 3, 25, 17]
    // console.log(InsertionSort(arr))

}

{// Bubble Sort

    function bubbleSort(arr) {

        for (let i = 0; i < arr.length-1; i++) {
            sorted = true
            for (let j = 1; j < arr.length - i; j++) {
                if ( arr[j] < arr[j-1]){
                    [arr[j] ,arr[j-1]] = [arr[j-1] ,arr[j]]
                    sorted = false
                }
            }
            if (sorted) break
        }
        return arr
    }
    let arr = [56, 10, -2, 15, 15, 9, 0, 1, 7, 3, 25, 17]
    console.log(bubbleSort(arr))
}

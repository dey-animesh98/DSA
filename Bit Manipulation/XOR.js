
//find missing number

let arr = [1, 2, 3, 4, 6]

let x = 0
for (i = 0; i < arr.length; i++) {
    x = x ^ arr[i]
}
// console.log(x)
for (let i = 1; i <= arr.length + 1; i++) {
    x = x ^ i
}

// console.log(x)


//count set bits
function countBit(n) {
    let a = 0
    while (n) {
        if (n & 1 == 1) a++
        n = n / 2 // n = n >> 1
    }
    return a
}

// console.log(countBit(13))


//Rightest set bit

function rightBit(n) {
    let a = 0
    while (n) {
        if (n & 1 == 1) return a + 1
        else a++
        n = n / 2 // n = n >> 1
    }
}

// console.log(rightBit(50))


//left most set bit  log2(num)
//lowest common ancestor

function findIn2D(arr, tar) {
    let row = 0, col = arr[0].length - 1

    while (row < arr.length && col >= 0) {
        if (arr[row][col] === tar) {
            return [row, col]
        } else if (arr[row][col] < tar) {
            row++
        } else {
            col--
        }
    }
    return [-1, -1]
}


// console.log(findIn2D(
//    [ [1,5,7,10],
//     [5,11,15,18],
//     [8,13,16,21],
//     [16,20,25,31]
// ], 8
// ))


///boyer moore voting
//dutch national flag
function swap(arr, i, j) {
    [arr[i], arr[j]] = [arr[j], arr[i]]
    return arr
}
function dnf(arr) {
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

// console.log(dnf([2, 1, 0, 2, 0, 1, 2, 1, 0, 1, 2, 0, 1]))


function zeroS(arr) {
    let start = 0, end = arr.length - 1

    while (start <= end) {
        if (arr[start] == 1) {
            swap(arr, start, end)
            end--
        } else {
            start++
        }
    }
    return arr
}

// console.log(zeroS([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]))
//   [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]


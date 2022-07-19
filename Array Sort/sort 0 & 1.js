// Sort array of 0 & 1 ---> O(n)

function sort(arr) {
    let curr = 0, count0 = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            count0++
        }
    }
    let count1 = arr.length - count0

    while (count0 > 0) {
        arr[curr] = 0
        count0--
        curr++
    }

    while (count1 > 0) {
        arr[curr] = 1
        count1--
        curr++
    }

    return arr
}

// console.log(sort([0, 0, 1, 1, 0, 0, 1, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 1, 1]))

function sort2(arr) { //Optimize
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
console.log(sort2([1, 1, 1, 1, 0, 0, 0, 0]))

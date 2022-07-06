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
console.log(so1([0, 1, 0, 0, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 0]))

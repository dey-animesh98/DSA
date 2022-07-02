// Find the missing number

function findMissing(arr = []) {
    let min = Math.min(...arr)

    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i] - min + 1
    }

    let missing = findMissing(arr)
    return missing + min - 1
}

// console.log(findMissing[2,3,4,5,7,8,9,10])




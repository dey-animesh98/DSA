function findEleRecursion(arr, tar, i) {
    if (i === arr.length) {
        return false
    }

    return arr[i] === tar || findEleRecursion(arr, tar, i + 1)
}

// console.log(findEleRecursion([2,8,1,9,3,7,6,2,8],11,0)) //Boolean


{
    function findIndexRecursion2(arr, tar, i) {
        if (i === arr.length) {
            return -1
        }

        if (arr[i] === tar) return i
        else return findIndexRecursion2(arr, tar, i + 1)
    }

    // console.log(findIndexRecursion2([2, 8, 1, 9, 3, 7, 6, 2, 8], 8, 0)) //Index
}

{
    // let res = []
    function findAllIndexRecursion2(arr, tar, i, res) {
        if (i === arr.length) {
            return res
        }

        if (arr[i] === tar) res.push(i)
        findAllIndexRecursion2(arr, tar, i + 1, res)

        return res
    }

    console.log(findAllIndexRecursion2([2, 8, 1, 9, 3, 7, 7, 6, 2, 8], 10, 0, [])) //Array
}


{
    function findAllIndexRecursion3(arr, tar, i) {
        let res = []
        if (i === arr.length) return res

        if (arr[i] === tar) res.push(i)
        let ansFromBelow = findAllIndexRecursion3(arr, tar, i + 1)
        return res.concat(ansFromBelow)
    }

    // console.log(findAllIndexRecursion3([2, 8, 1, 9, 3, 7, 7, 6, 2, 8], 10, 0))  //Array
}

function printN(n) {
    if (n === 0) {
        return
    }
    console.log(n)//rev
    printN(n - 1)
    console.log(n)//fwd
}

// printN(10)

function fact(n) {
    if (n == 1) return 1

    return n * fact(n - 1)
}

// console.log(fact(5))



//Finding max and min
function maxMin(arr) {
    let max = arr[0], min = arr[0]
    for (let ele of arr) {
        max = ele > max ? ele : max
        min = ele < min ? ele : min
    }

    return `max: ${max} , min: ${min}`
}

// console.log(maxMin([2, 8, 12, 6, 54, 63, 2, -2]))

{
    function cummSum(arr) {
        let sums = []
        let currSum = 0
        for (let ele of arr) {
            currSum += ele
            sums.push(currSum)
        }
        return sums
    }

    // console.log(cummSum([2,4,6,8]))//[2,6,12,20]
}

{
    function cummSum2(arr) {
        let sums = [arr[0]]
        for (let i = 1; i < arr.length; i++) {
            sums.push(arr[i] + sums[i - 1])
        }
        return sums
    }

    // console.log(cummSum2([2,4,6,8])) //[2,6,12,20]
}


{
    function removeDup(arr) {
        let map = new Map()
        for (let item of arr) {
            map.set(item, 1)
        }
        return [...map.keys()]

    }

    // console.log(removeDup([2, 6, 3, 4, 8, 2, 1, 4, 7, 8, 3]))
}

{
    function removeDup2(arr) {
        let res = []
        let prev = arr[0]
        res[0] = prev
        for (let ele of arr) {

            if (ele !== prev) {
                res.push(ele)
            }
            prev = ele
        }
        return res
    }
    // console.log(removeDup2([2,2,3,3,6,5,5]))

}


{
    function findSumPairs(arr, tar) {
        let visited = {}
        let res = []

        for (let ele of arr) {
            let targetVal = tar - ele
            if (visited[targetVal]) {
                res.push([targetVal, ele])
            }
            visited[ele] = true
        }
        return res
    }

    console.log(findSumPairs([3, 4, 3, 5, 4, 7, -10, 1], 5))
}
/**
 * Given an integer array, find the maximum product of two integers in it.

For example, consider array {-10, -3, 5, 6, -2}. The maximum product is the (-10, -3) or (5, 6) pair.
 */
// Pairs will be sub array
function maxProduct(arr) {
    let maxProduct = 0, pairs = []
    for (let i = 0; i < arr.length; i++) {
        for (j = i + 1; j < arr.length; j++) {
            let currProd = arr[i] * arr[j]
            if (maxProduct < currProd) {
                maxProduct = currProd
                pairs = [arr[i], arr[j]]
            }
        }
    }
    return pairs
}

// console.log(maxProduct([-10, -3, 5, 7, -2]))

// Only max not subarry

function maxProduct(arr) {
    let max = -Infinity + 10, sMax = -Infinity, res = []
    for (let i = 0; i < arr.length; i++) {
        let curr = Math.abs(arr[i])
        if (curr > max) {
            sMax = max
            max = curr
            res = [arr[i], sMax]
        } else if (curr > sMax && curr < max) {
            sMax = curr
            res[1] = arr[i]
        }
    }

    return res
}

console.log(maxProduct([5,-15,5,2,10,13,-20]))
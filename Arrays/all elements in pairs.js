// in an array, find all elements without pair
//TCO(n), -S.C -> O(n)
function checkPairs(arr) {
    let map = new Map()
    for (let ele of arr) {
        map.set(ele, map.get(ele) + 1 || 1)
    }
    let unpaired = []
    for (let pairs of map) {
        if (pairs[1] % 2 === 1) {
            unpaired.push(pairs[0])
        }
    }
    return unpaired
}

console.log(checkPairs([2, 4, 6, 7, 2, 9, 4, 11, 15, 7, 2, 9, 11]))
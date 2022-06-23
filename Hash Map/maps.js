{
    function dupCount(arr) {
        let map = new Map(), res = []
        for (let ele of arr) {
            map.set(ele, map.get(ele) + 1 || 1)
        }
        for (let pairs of map) {
            if (pairs[1] > 1) res.push(pairs[0])
        }
        return res
    }
    // console.log(dupCount([3, 2, 4, 4, 4, 4, 4, 4, 6, 3, 2, 1, 4, 2,]))
}
//alternate method
{
    function myMap(arr) {
        let map = new Map()
        for (let i of arr) {
            if (!map.get(i)) {
                map.set(i, 1)
            } else {
                map.set(i, map.get(i) + 1)
            }
        }
        let res = []
        for (let pairs of map) {
            if (pairs[1] > 1) {
                res.push(pairs[0])
            }
        }
        return res
    }

    console.log(myMap([3, 3, 2, 4, 4, 6,]))

}
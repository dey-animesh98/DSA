//Find all  duplicate elements in the array

{
    function dupArr(arr) {
        let map = new Map()
        let dup = []
        for (let ele of arr) {
            map.set(ele, map.get(ele) + 1 || 1)
        }

        for (let pairs of map) {
            if (pairs[1] > 1) {
                dup.push(pairs[0])
            }
        }
        return dup
    }
    console.log(dupArr([1, 1, 2, 2, 3, 4, 5, 6, 6, 7, 3, 8]));
}
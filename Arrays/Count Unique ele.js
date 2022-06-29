//Count of unique elements-2

{
    function countUnique(arr) {
        let map = new Map()
        for (let ele of arr) {
            if (map.get(ele)) {
                map.delete(ele)
            } else {
                map.set(ele, 1)
            }
        }
        return map.size
    }
    // console.log(countUnique([1,1,2,2,3,4,5,6,6]))
}
//-- 2
{
    function countUnique(arr) {
        let map = new Map()
        let count = 0
        for (let ele of arr) {
            if (map.get(ele)) {
                map.set(ele, map.get(ele) + 1)
            } else {
                map.set(ele, 1)
            }
        }
        for (let pairs of map) {
            if (pairs[1] === 1) {
                count++
            }
        }
        return count
    }
    console.log(countUnique([1, 1, 2, 2, 3, 4, 5, 6, 6]))
}
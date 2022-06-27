//Find the element maximum occured in array --1
{
    function maxFreq(arr) {
        if (!arr.length) return null
        let map = new Map()
        let maxFreq = 1
        let freqEle = arr[0]
        for (let ele of arr) {
            if (map.get(ele)) {
                map.set(ele, map.get(ele) + 1)
                if (maxFreq < map.get(ele)) {
                    maxFreq = map.get(ele)
                    freqEle = ele
                }
            } else {
                map.set(ele, 1)
            }
        }
        return [maxFreq, freqEle]
    }

    // console.log(maxFreq([1, 3, 1, 3, 4, 3, 6, 2, 3, 8, 4]))
}

//Find the element maximum occured in array --2

{
    function freq1(arr) {
        let maxFreq = 0, maxEle = 0
        let map = new Map()
        for (let el of arr) {
            map.set(el, map.get(el) + 1 || 1)
        }
        for (let pairs of map) {
            if (pairs[1] > maxFreq) {
                maxFreq = pairs[1]
                maxEle = pairs[0]
            }
        }
        return [maxFreq, maxEle]
    }
    console.log(freq1([7, 8, 6, 5, 7, 7, 1, -1, -6, 7]))
}
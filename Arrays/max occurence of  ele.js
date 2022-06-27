{
    function maxFreq(arr) {
        if(!arr.length) return null
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

    console.log(maxFreq([1,3,1,3,4,3,6,2,3,8,3,4,3]))
}
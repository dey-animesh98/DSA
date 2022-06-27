//Min occured ele in array
{
    function leastfreq1(arr) {
        let minFreq = Infinity, minEle = 0
        let map = new Map()
        for (let el of arr) {
            map.set(el, map.get(el) + 1 || 1)
        }
        for (let pairs of map) {
            if (pairs[1] < minFreq) {
                minFreq = pairs[1]
                minEle = pairs[0]
            }
        }
        return [minFreq, minEle]
    }
    console.log(leastfreq1([7, 6, 6, 5, 5, 5, 7, 7, 4, 4, 6, 7]))
    // console.log(leastfreq1("aabaabac"))
}
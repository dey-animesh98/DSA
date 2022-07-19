//remove dup
{
    function dup(arr) {
        return set = [...new Set(arr)]
    }
    console.log(dup([1, 2, 4, 2, 4, 6, 7, 7, 1]))
}

{
    function dup2(arr) {
        let map = new Map(), res = []
        for (let ele of arr) {
            if (!map.has(ele)) {
                map.set(ele, 1)
                res.push(ele)
            }
        }

        return res

    }
    console.log(dup2([1, 2, 4, 2, 4, 6, 7, 7, 1]))
}
{
    function dup3(arr) {
        let map = new Map(), res = []
        for (let ele of arr) {
            map.set(ele, map.get(ele) + 1 || 1)
        }
        for (let pairs of map) {
            if (pairs[1] === 1) res.push(pairs[0])
        }
        return res
    }
    console.log(dup3([1, 2, 4, 2, 4, 6, 7, 7, 1]))

}
{//second highest freq
    function sfreq(arr) {
        let map = new Map(), max = 0, Smax = -1, sele = null, mele = null
        for (let ele of arr) {
            map.set(ele, map.get(ele) + 1 || 1)
        }
        for (let pairs of map) {
            if (pairs[1] > max) {
                Smax = max
                sele = mele
                max = pairs[1]
                mele = pairs[0]

            } else if (pairs[1] < max && pairs[1] > Smax) {
                Smax = pairs[1]
                sele = pairs[0]
            }

        }
        return [Smax, sele]
    }
    console.log(sfreq([1, 2, 2, 4, 2, 4, 6, 7, 7, 7, 2]))
}

{//max sum of two ele
    function maxtwo(arr) {
        let max = -Infinity, smax = null
        for (let ele of arr) {
            if (ele > max) {
                smax = max
                max = ele
            } else if (ele < max && ele > smax) {
                smax = ele
            }
        }
        console.log(max, smax)
        return max + smax
    }
    console.log(maxtwo([12, 45, 23, 78, 10, 80, 90, 90]))
}

{//Binary Search

    function findEle(arr, target) {
        let start = 0, end = arr.length - 1

        while (start <= end) {
            let mid = Math.floor(start + (end - start) / 2)

            if (target < arr[mid]) {
                end = mid - 1
            } else if (target > arr[mid]) {
                start = mid + 1
            } else {
                return mid
            }
        }
        return start
    }
    console.log(findEle([1, 2, 4, 5, 6, 7, 9, 10, 12], 3))
}

(function () {
    console.log("iife")
})()
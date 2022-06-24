{//Swap the number --1
    let a = 4
    let b = 9

    b = b - a // b = 5 | a = 4
    a = a + b // b =5 | a=9
    b = a - b//b= 4 | a = 9
    // console.log(a, b)
}

{//Swap the number --1 A
    let a = 7
    let b = 6

    a = a + b // a = 13 | b= 6
    b = a - b // b = 7 | a = 13
    a = a - b // b = 7 | a = 6
}

//=====String swap-2
{
    let s1 = "some"
    let s2 = "thing"

    s1 = s1 + s2 // something

    s1 = s1.slice(-s2.length)

    //  console.log(s1)

}

// reverse a array without using extra array-3
{
    let arr = [5, 8, 12, 9]
    let start = 0
    let end = arr.length - 1
    while (start < end) {
        let temp = arr[start]
        arr[start] = arr[end]
        arr[end] = temp
        start++
        end--

    }
    // console.log(arr)
}

// reverse a array without using extra array-3A
{
    // function swap(a, b) {
    //     a = a + b
    //     b = a - b
    //     a = a - b
    //     return
    // }
    function rev(arr) {
        let i = 0, j = arr.length - 1
        while (i < j) {
            //swap(arr[i], arr[j])
            arr[i] = arr[i] + arr[j]
            arr[j] = arr[i] - arr[j]
            arr[i] = arr[i] - arr[j]
            i++
            j--
        }
        return arr
    }
    // console.log(rev([2, 8, 1, 9]))




    // Rotate array by times ** Dont take new array -4

    function rotateArr(arr, k) {
        if (k > arr.length) {
            k = k % arr.length
        }
        let roated = rev(arr)
        let firstR = rev(roated.slice(0, k))
        let lastR = rev(roated.slice(k))
        return [...firstR, ...lastR]
    }

    // console.log(rotateArr([1, 2, 3, 4, 5, 6, 7],))
}



//Find the max of any two ele(without sorting array)-5
//largest and second largest num
{
    function large(arr) {
        let l = 0; sl = 0
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] >= l) {
                sl = l
                l = arr[i]
            }

        }
        console.log(l, sl)
        return (l + sl)
    }
    // console.log(large([5, 8,2,55,55,27,27, 12, 15, 17, 2,27,8,10,55,10]))
}

// Given an array repeated elements, return the most repeated the most repeated element from array - 6
//
{
    function freq(arr) {
        let maxFreq = 0, maxEle = 0
        let map = new Map()
        for (let el of arr) {
            if (map.get(el)) {
                map.set(el, map.get(el) + 1)
                if (maxFreq < map.get(el)) {
                    maxFreq = map.get(el)
                    maxEle = el
                }
            } else {
                map.set(el, 1)
            }

        }
        return maxEle
    }
    // console.log(freq([5, 1, 8, 5, 3, 5, 1]))
}
// Given an array repeated elements, return the most repeated the most repeated element from array - 6A


{
    function freq1(arr) {
        let maxFreq = 0, maxEle = 0
        let map = new Map()
        for (let el of arr) {
            map.set(el, map.get(el) + 1 || 1)

            // if (map.get(el)) {
            //     map.set(el, map.get(el) + 1)
            // } else {
            //     map.set(el, 1)
            // }
        }
        for (let pairs of map) {
            if (pairs[1] > maxFreq) {
                maxFreq = pairs[1]
                maxEle = pairs[0]
            }
        }
        return maxEle
    }
    // console.log(freq1([7, 8, 6, 5, 7, 7, 1, -1, -6, 7]))
}

//least frequency
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
        return minEle
    }
    //console.log(leastfreq1([7, 6, 5, 7, 7, 1, -1, -6, 7]))
    // console.log(leastfreq1("aabaabac"))
}


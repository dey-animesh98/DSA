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


//Swap New 
function swapNew(n1, n2) {
    [n1, n2] = [n2, n1]
    return [n1, n2]

}
// console.log(swapNew(5, 7))

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
            //Alternative       } else {
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

let str = "aabbcc"
let b = str.slice(0, 5)
// console.log(b)

///---------------------------27-06-2022------------------------------//

//Given an array , filter out duplicate elements and give unique elements in arr
{
    function uniqueArr(arr) {
        let map = new Map()
        let unique = []
        let c = 0
        for (let ele of arr) {
            map.set(ele, map.get(ele) + 1 || 1)
        }

        for (let pairs of map) {
            if (pairs[1] === 1) {
                unique.push(pairs[0])
                c++
            }
        }
        console.log(map)
        return c
    }
    console.log(uniqueArr([9, 8, 7, 6, 5, 4, 3, 2, 1, 0, 12, 13, 14, 21, 45, 65, 23, 34, 54, 56]));
}

// Return the ele which are duplicates
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
    // console.log(dupArr([1, 1, 2, 2, 3, 4, 5, 6, 6, 7, 3, 8]));
}



// Take an input and check whether the input is an interger or
{
    function checkInt(input) {
        return input === parseInt(input)
    }
    // console.log(checkInt(56))
}

{
    function checkInt2(input) {
        if (input < 0) {
            let xx = input * 2
            input = (input - xx)
        }
        //input = Math.abs(input)
        input += ""
        let arr = input.split('')

        for (let i = 0; i < arr.length; i++) {
            if (arr[i] >= 0 && arr[i] <= 9) {
                continue
            } else {
                return false
            }
        }
        return true
    }
    // console.log(checkInt2(124))
}

// Integer Regex = /^-?[0-9]+$/

//Using regex
{
    function checkInt3(input) {
        let intReg = /^-?[0-9]+$/
        let res = intReg.test(input)
        return res
    }
    //  console.log(checkInt3(23))


}
//take a number and if number is multiple of 3 print "Foo"
//take a number and if number is multiple of 5 print "Bar"
//take a number and if number is multiple of 3  & 5 print "FooBar"
// else print nothing

{
    function printer(number) {
        if (number % 3 === 0 && number % 5 === 0) {
            console.log(("FooBar"));
        } else if (number % 3 === 0) {
            console.log(("Foo"));
        } else if (number % 5 === 0) {
            console.log(("Bar"));
        }
    }
    // printer(25)
}




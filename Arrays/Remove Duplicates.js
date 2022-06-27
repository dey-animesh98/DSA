//Remove dup elements in array ---1 (sorted/Unsorted) 
{//Decrement Order
    function removeDup(arr) {
        let map = {}
        for (let i = arr.length - 1; i >= 0; i--) {
            if (map.hasOwnProperty(arr[i])) {
                arr.splice(i, 1)
            } else {
                map[arr[i]] = 1
            }
        }
        return arr
    }
    // console.log(removeDup([1, 1, 3, 5, 5, 6, 7, 7, 7, 9, 2, 4, 3, 12, 15, 4, 15]))
    // console.log(removeDup([1, 1, 3, 5, 5, 6, 7, 7, 7, 9, 10, 10, 12, 13, 13, 13, 13, 13, 13, 13, 13, 14]))

}

//Remove dup elements in array --2
{//Increment order
    function removeDup(arr) {
        let map = {}
        for (let i = 0; i < arr.length; i++) {
            if (map.hasOwnProperty(arr[i])) {
                arr.splice(i, 1)
                i--
            } else {
                map[arr[i]] = 1
            }
        }
        return arr
    }
    // console.log(removeDup([1, 1, 3, 5, 5, 6, 7, 7, 7, 9, 2, 4, 3, 12, 15, 4, 15]))
    // console.log(removeDup([1, 1, 3, 5, 5, 6, 7, 7, 7, 9, 10, 10, 12, 13, 13, 13, 13, 13, 13, 13, 13, 14]))

}
//Remove dup elements in array --3
{//HashMap
    function removeDup(arr) {
        let map = {}
        for (let i = 0; i < arr.length; i++) {
            map[arr[i]] = 1
        }
        return Object.keys(map).map(Number) // result will an sorted array
    }
    // console.log(removeDup([1, 1, 3, 5, 5, 6, 7, 7, 7, 9, 2, 4, 3, 12, 15, 4, 15]))
}

//Remove dup elements in array --4
{//Return in new /distinct array unique elements. 
    {
        function removeDup(arr) {
            let map = {}, res = []
            for (let i = 0; i < arr.length; i++) {
                if (!map.hasOwnProperty(arr[i])) {
                    res.push(arr[i])
                    map[arr[i]] = 1
                }
            }
            return res //result will an sorted array
        }
        // console.log(removeDup([1, 1, 3, 5, 5, 6, 7, 7, 7, 9, 2, 4, 3, 12, 15, 4, 15]))
        // console.log(removeDup([1, 1, 3, 5, 5, 6, 7, 7, 7, 9, 10, 10, 12, 13, 13, 13, 13, 13, 13, 13, 13, 14]))

    }
}


///------------------------------------
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

        return unique
    }
    console.log(uniqueArr([9, 8, 7, 6, 5, 3, 4, 3, 2, 1, 4, 11, 16, 7, 14]));
}
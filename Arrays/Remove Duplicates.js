//Remove dup elements in array (sorted/Unsorted) //Decrement Order
{
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
    console.log(removeDup([1, 1, 3, 5, 5, 6, 7, 7, 7, 9, 2, 4, 3, 12, 15, 4, 15]))
    // console.log(removeDup([1, 1, 3, 5, 5, 6, 7, 7, 7, 9, 10, 10, 12, 13, 13, 13, 13, 13, 13, 13, 13, 14]))

}

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
    console.log(removeDup([1, 1, 3, 5, 5, 6, 7, 7, 7, 9, 2, 4, 3, 12, 15, 4, 15]))
    // console.log(removeDup([1, 1, 3, 5, 5, 6, 7, 7, 7, 9, 10, 10, 12, 13, 13, 13, 13, 13, 13, 13, 13, 14]))

}

{
    function removeDup(arr) {
        let map = {}
        for (let i = 0; i < arr.length; i++) {
            map[arr[i]] = 1
        }
        return Object.keys(map).map(Number) // result will an sorted array
    }
    console.log(removeDup([1, 1, 3, 5, 5, 6, 7, 7, 7, 9, 2, 4, 3, 12, 15, 4, 15]))
}

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
        console.log(removeDup([1, 1, 3, 5, 5, 6, 7, 7, 7, 9, 2, 4, 3, 12, 15, 4, 15]))
        // console.log(removeDup([1, 1, 3, 5, 5, 6, 7, 7, 7, 9, 10, 10, 12, 13, 13, 13, 13, 13, 13, 13, 13, 14]))

    }
}

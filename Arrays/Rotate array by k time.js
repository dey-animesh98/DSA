//Rotate array by k times
// reverse a array without using extra array-3A
{
   
    function rev(arr) {
        let i = 0,  j = arr.length - 1
        while (i < j) {
            arr[i] = arr[i] + arr[j]
            arr[j] = arr[i] - arr[j]
            arr[i] = arr[i] - arr[j]
            i++
            j--
        }
        return arr
    }

    function rotateArr(arr, k) {
        if (k > arr.length) {
            k = k % arr.length
        }
        let roated = rev(arr)
        let firstR = rev(roated.slice(0, k))
        let lastR = rev(roated.slice(k))
        return [...firstR, ...lastR]
    }

    // console.log(rotateArr([1, 2, 3, 4, 5, 6, 7],2))
}




{
     function swap(a, b) {
     // function swap(a, b) {
    //     a = a + b
    //     b = a - b
    //     a = a - b
    //     return
    // }
        return 
    }
    // console.log(swap(7,8))
    function rev(arr) {
        let i = 0, j = arr.length - 1
        swap(arr[i], arr[j])
        // while (i < j) {
        //     i++
        //     j--
        // }
        console.log(arr)
        return arr

    }
    console.log(rev([2, 8, 1, 9]))

}
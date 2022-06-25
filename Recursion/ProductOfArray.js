//Product of an array using recursion

{
    function arrayProduct(arr) {
        if (arr.length === 0) return 0
        if (arr.length === 1) return arr[0]
        return arr[0] * arrayProduct(arr.slice(1))
    }
    // console.log(arrayProduct([4,5,3]))
}
//--
{
    function arrayProduct(arr, size) {
        if (size === 0) return "no value"
        if (size === 1) return arr[0]
        return arr[size - 1] * arrayProduct(arr, size - 1)
    }
    let arr =[5, 5, 4, 4, 5, 5, 8, 7, 9, 6, 5, 7, 5, 8, 2, 5, 5, 5, 4, 5, 8, 7, 4, 44, 4, 4, 4, 4, 6, 6, 6, 6, 6, 8, 8, 7, 7, 4, 1, 2, 5, 2, 2, 2]
    let n = arr.length
    console.log(arrayProduct(arr, n))
}

//Product of an array using recursion

{
    function arrayProduct(arr) {
        if (arr.length === 0) return 0
        if(arr.length === 1) return arr[0]
        return arr[0] * arrayProduct(arr.slice(1))
    }
    // console.log(arrayProduct([4,5,3]))
}
//--
{
    function arrayProduct(arr,size) {
        if (size === 0) return 0
        if(size === 1) return arr[0]
        return arr[size-1]*arrayProduct(arr,size-1 )
    }
    console.log(arrayProduct([5,5],2))   
}

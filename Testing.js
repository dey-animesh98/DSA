function subArray(arr, n) {

    // Pick starting point
    for (let i = 0; i < n; i++) {
        // Pick ending point
        for (let j = i; j < n; j++) {
            // Print subarray between current
            // starting and ending points
            for (let k = i; k <= j; k++)
                console.log(arr[k] + " ");

        }
    }
}
// subArray([1,2,3,4],4)

///Memoization
{

    function square(n, prevValue = []) {
        if (prevValue[0] != null) {
            return prevValue[0]
        }
        let res = 0
        for (let i = 1; i <= n; i++) {
            for (let j = 1; j <= n; j++) {
                res += 1
            }
        }
        prevValue[0] = res
        return res
    }
    // console.time()
    // console.log(square(30000))
    // console.timeEnd()
}


/**    console.log(square(30000))
    console.log(square(30000))
    console.log(square(30000))
    console.log(square(30000))
    console.log(square(30000)) */
let arr = [1,2,3,4,5,6,7,8,9]
for(let i = 0; i< arr.length; i++){
    for(let j = i; j< i+2;j++){
        console.log(i,j)
    }
  
}



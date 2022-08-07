function sumOfSubArray(arr) {
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        for (let j = i; j <= arr.length; j++) {
            for (let k = i; k < j; k++) {
                sum += arr[k]
            }
        }
    }
    return sum
}

let arr = [1, 2, 3] // [1][1,2][2][1,2,3][2,3][3]
// console.log(sumOfSubArray(arr)) // O(n^3)


{

}
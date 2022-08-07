/**
 * Given a binary array, sort it in linear time and constant space. The output should print all zeroes, followed by all ones.

For example,

Input:  { 1, 0, 1, 0, 1, 0, 0, 1 }
 
Output: { 0, 0, 0, 0, 1, 1, 1, 1 }
 */

//
function sortBinary(arr) {
    let left = 0, right = arr.length - 1
    while (left < right) {
        if (arr[left] === 0 && left < right) {
            left++
        }
        else if (arr[right] === 1 && left < right) {
            right--
        }
        else {
            [arr[left], arr[right]] = [arr[right], arr[left]]
        }
    }
    return arr
}

console.log(sortBinary([1,1,1,1,0,0,1,0,0,1,0,0,0,1,0,0,0,1,1,0,0,0,1,0,0,1,0]))
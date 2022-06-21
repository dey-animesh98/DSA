
/**
 * Binary Search using Recursion
 * This Dividde & Conquer Recursion
 *  F(n) = F(N/2)+O(1)
 */

{
    function findNum(arr, target, start, end) {
        if (start > end) {
            return -1
        }
        let mid = Math.floor(start + (end - start) / 2)
        if (arr[mid] == target) {
            return mid
        }
        if (target > arr[mid]) {
            return findNum(arr, target, mid + 1, end)
        }
        return findNum(arr, target, start, mid - 1)
    }

    let array = [5, 8, 25, 45, 61, 78]
    let tar = 61
    let s = 0
    let e = array.length - 1
    console.log(findNum(array, tar, s, e))
}
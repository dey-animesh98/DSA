/*
Given arr1 is Array of integers and arr2 is squares of the elements of arr1.
Check squares of all elements from arr1 are exits in arr2 or not.
if exits return true else false.
Example:1
let arr1 = [2,4,6,8]
let arr2 = [36, 16, 4, 64]
Return:true

Example:1
let arr1 = [2,4,6,8]
let arr2 = [36, 16, 20, 64]
Return:false
*/
//--
{
    function findSquare(nums, squares) {
        let numHash = {}, sqrHash = {}
        for (let i = 0; i < nums.length; i++) {
            numHash[nums[i]] = numHash[nums[i]] ? numHash[nums[i]] += 1 : 1
        }

        for (let j = 0; j < squares.length; j++) {
            sqrHash[squares[j]] = sqrHash[squares[j]] ? sqrHash[squares[j]] += 1 : 1
        }

        for (let key in numHash) {
            if (sqrHash[key * key] != numHash[key]) {
                return false
            }
        }
        return true
    }
    console.log(findSquare([2, 4, 6, 8], [16, 4, 36, 64]))
}

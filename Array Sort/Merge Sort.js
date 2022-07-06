//Divide array in two parts
//Get both parts sorted by recursion
//After sorting merge those by two pointer

//Off-place merge sort; Return new array
{
    const merge = function (arr1, arr2) {
        let result = []
        let i = 0
        let j = 0
        while (i < arr1.length && j < arr2.length) {
            if (arr1[i] <= arr2[j]) {
                result.push(arr1[i])
                i++
            } else {
                result.push(arr2[j])
                j++
            }
        }
        while (i < arr1.length) {
            result.push(arr1[i])
            i++
        }
        while (j < arr2.length) {
            result.push(arr2[j])
            j++
        }
        return result
    }

    const sortArray = function (nums) {
        if (nums.length === 1) return nums
        let mid = Math.floor(nums.length / 2)

        let left = sortArray(nums.slice(0, mid))
        let right = sortArray(nums.slice(mid))

        return merge(left, right)
    };

    console.log(sortArray([5, 1, 3, 6, 1, 8, 2, 4, 3, 45, 0, 18, -6, 1, 3]))
}
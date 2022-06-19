//Sliding Window Approach
//It Applicable on array and strings
// Don't need to be sorted
// Applicable when need to traverse on array like a window
// ** Find the max sum of k consecutive elements in an array
// let array = [5,12,45,3,78,16,23,55,63,10,6,8] , k=3

// Brute force --I Not Optimized & Scalable


 /**
  * Some commom terms used in this type of Questions.
  * consecutive => ক্রমাগত (continuous, serial )
  * Contiguous => সংলগ্ন, পার্শ্ববর্তী, (neighbour, nearby, adjacent)
  * distinct => স্বতন্ত্র (indivisual)
  */
{
    function findMaxSum(array) {
        let maxSum = 0
        let subSet = []
        for (let i = 0; i < array.length - 2; i++) {
            if (array[i] + array[i + 1] + array[i + 2] > maxSum) {
                maxSum = array[i] + array[i + 1] + array[i + 2]
                subSet = [array[i], array[i + 1], array[i + 2]]
            }
        }
        return [subSet, maxSum]
    }
    // console.log(findMaxSum([5, 12, 45, 3, 78, 16, 23, 55, 63, 10, 6, 8, 200]))
}

// Brute force --I Not Optimized  But Scalable O(n^2)
{
    function findMaxSum(array, k) {
        let maxSum = 0
        let subSet = []
        for (let i = 0; i <= array.length - k; i++) {
            let subSetSum = 0
            for (let j = i; j < i + k; j++) {
                subSetSum += array[j]
                if (subSetSum > maxSum) {
                    maxSum = subSetSum
                    subSet = [array[i], array[j]]// Need some modification to return all elements
                }
            }
        }
        return [subSet, maxSum]

    }
    // console.log(findMaxSum([5, 12, 45, 3, 78, 16, 23, 55, 63, 10, 6, 8, 200], 20))

}

{//Optimized & Scalable O(n+k) = O(n)

    function findMaxSum(array, k) {
        let maxSum = 0
        let sumFirstK = 0
        for (let i = 0; i < k; i++) {
            sumFirstK += array[i]
        }
        maxSum = sumFirstK
        for (let j = 0; j < array.length - k; j++) {
            sumFirstK += array[j + k] - array[j]
            if (sumFirstK > maxSum) {
                maxSum = sumFirstK
            }
        }
        return maxSum
    }
    console.log(findMaxSum([300, 12, 45, 3, 78, 16, 23, 55, 63, 10, 6, 8, 200], 3))

}

{// Same Result different approach
    function findMaxSum(array, k) {
        let maxSum = 0
        let sumFirstK = 0
        for (let i = 0; i < k; i++) {
            sumFirstK += array[i]
        }
        maxSum = sumFirstK
        for (let j = k; j < array.length; j++) {
            sumFirstK += array[j] - array[j - k]
        }
        maxSum = sumFirstK > maxSum ? sumFirstK : maxSum 
        return maxSum
    }
    console.log(findMaxSum([300, 12, 45, 3, 78, 16, 23, 55, 63, 10, 6, 8, 200], 3))

}

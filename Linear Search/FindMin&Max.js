//Find the min value in the array (without math.min / math.max)
//To find min value, sort the array in ascending order, return 0th index/ length-1. 
//To find max value, sort the array in descending order, return 0th index / length-1.

// Linear Search Method Finding Min Value>>
{
    function findMin(array) {
        let min = array[0]
        for (let i = 1; i < array.length; i++) {
            if (array[i] < min) {
                min = array[i]
            }
        }
        return min
    }
    const arr = [10, 55, 7, 4, 77, 221, 45, 447, 3, 47, 5, -5, -8]
    const res = findMin(arr)
    console.log(res)
}

// Linear Search Method Finding Max Value>>
{
    function findMin(array) {
        let max = array[0]
        for (let i = 1; i < array.length; i++) {
            if (array[i] > max) {
                max = array[i]
            }
        }
        return max
    }
    const arr = [10, 55, 7, 4, 77, 221, 45, 447, 3, 47, 5, -5, -8]
    const res = findMin(arr)
    console.log(res)
}

//Find Max Value in 2D Arrays----------------------------------------------------2D Array-----------------------------------------------------//
{
    function findMax2D(array) {
        let max = array[0][0]
        for (let row = 0; row < array.length; row++) {
            for (let col = 1; col < array[row].length; col++) {
                if (array[row][col] > max) {
                    max = array[row][col]
                }
            }
        }
        return max
    }
    const arr = [[2, 21, 7], [12, 32, 4], [17, 21], [23, 25, 7], [12, 56, 45, 89, 107]]
    const res = findMax2D(arr)
    console.log(res)
}

//Find Min Value in 2D Arrays

{
    function findMin2D(array) {
        let min = array[0][0]
        for (let row = 0; row < array.length; row++) {
            for (let col = 1; col < array[row].length; col++) {
                if (array[row][col] < min) {
                    min = array[row][col]
                }
            }
        }
        return min
    }
    const arr = [[2, 21, 7], [12, 32, 4], [17, 21], [23, 25, 7], [12, 56, 45, 89, 107]]
    const res = findMin2D(arr)
    console.log(res)
}
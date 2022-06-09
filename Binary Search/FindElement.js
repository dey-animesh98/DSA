//Binary Search in sorted Array (ascending order)
//Find the  element in the given array using binary search
{
    function findElement(array, target) {
        let start = 0
        let end = array.length - 1
        // console.log("length of arr: ", array.length)
        while (start <= end) {
            let mid = Math.floor(start + (end - start) / 2)   //We are this for handle integer range this is same as [start+end/2]
            // console.log("mid: ", mid, array[mid])
            if (target < array[mid]) {
                end = mid - 1
                // console.log("end: ", end)
            } else if (target > array[mid]) {
                start = mid + 1
                // console.log("start: ", start)
            } else {
                return mid
            }
        }
        return -1
    }
    console.log(findElement([2, 4, 6, 8, 9, 11, 15], 11))
}


// Implementation of Order-Agnostic Binary Search: Where we dont know whether the array is in ascending / descending order
{
    function findElementABS(array, target) {
        let start = 0
        let end = array.length - 1
        let isAscending = array[start] < array[end]
        while (start <= end) {
            let mid = Math.floor(start + (end - start) / 2)
            if (array[mid] == target) {
                return mid
            }
            if (isAscending) {
                if (target > array[mid]) {
                    start = mid + 1
                } else if (target < array[mid]) {
                    end = mid - 1
                }
                
            } else {
                if (target < array[mid]) {
                    start = mid + 1
                } else if (target > array[mid]) {
                    end = mid - 1
                }
               
            }
        }
        return -1
    }
    console.log(findElementABS([-8, -6, -3, -1, 0, 1, 2, 4, 6, 8, 9, 11, 15, 17, 19, 20, 22], -6))
    console.log(findElementABS([22, 20, 18, 17, 14, 13, 12, 10, 9, 8, 6, 2, 1, 0, -3, -5, -7], 18))
}
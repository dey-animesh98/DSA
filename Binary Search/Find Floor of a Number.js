// Find the Floor of a number(Smallest lesser / equal to the number ) Order-Agnoustic Binary Search

{
    function findFloor(array, target) {
        let start = 0
        let end = array.length - 1
        let isAscending = array[start] < array[end]

        while (start <= end) {
            let mid = Math.floor(start + (end - start) / 2)
            if (array[mid] == target) {
                return ("Index:" + mid + " Ele:" + array[mid])
            }
            if (isAscending) {
                if (target > array[mid]) {
                    start = mid + 1
                } else if (target < array[mid]) {
                    end = mid - 1
                }
            } else {
                if (target < array[end]) {
                    return -1
                }
                if (target < array[mid]) {
                    start = mid + 1
                } else if (target > array[mid]) {
                    end = mid - 1
                }
            }
        }
        if (isAscending) {
            return ("Index:" + end + " Ele:" + array[end])
        }
        return ("Index:" + (end + 1) + " Ele2:" + array[end + 1])
    }
    console.log(findFloor([-3, -1, 0, 2, 5, 6, 8, 10], 5))
    console.log(findFloor([10, 8, 6, 5, 2, 0, -1, -3], 5))
}



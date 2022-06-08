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
        return ("Index:" + (end + 1) + " Ele:" + array[end + 1])
    }
    console.log(findFloor([-8, -6, -3, -1, 0, 1, 2, 4, 6, 8, 9, 11, 15, 17, 19, 20, 22], -6))
    console.log(findFloor([22, 20, 18, 17, 14, 13, 12, 10, 9, 8, 6, 2, 1, 0, -3, -5, -7], 19))
}
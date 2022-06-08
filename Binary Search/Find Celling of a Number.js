// Find the Celling of a number(Smallest Greater / equal to the number ) Order-Agnoustic Binary Search

{
    function findCeilling(array, target) {
        let start = 0
        let end = array.length - 1
        let isAscending = array[start] < array[end]
        while (start <= end) {
            let mid = Math.floor(start + (end - start) / 2)
            if (array[mid] == target) {
                return "Index:" + mid + " Ele:" + array[mid]
            }
            if (isAscending) {
                if (target > array[end]) {
                    return -1
                }
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
            return ("Index:" + start + " Ele:" + array[start])              //Only change in this Line , Everything is same as Order-Agnoustic BS
        }
        return ("Index:" + (start - 1) + " Ele:" + array[start - 1])
    }
    console.log(findCeilling(["b", "d", "e","g", "i", "l"],"k"))
    // console.log(findCeilling([10, 8, 6, 5, 2, 0, -1, -3], -7))
}

// Fi



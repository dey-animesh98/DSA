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
        if(isAscending)
        return array[start] //Only change in this Line , Everything is same as Order-Agnoustic BS
        return array[start-1]
    }
    console.log(findElementABS([-8, -6, -3, -1, 0, 1, 2, 4, 6, 8, 9, 11, 15, 17, 19, 20, 22], 12))
    console.log(findElementABS([22, 20, 18, 17, 14, 13, 12, 10, 9, 8, 6, 2, 1, 0, -3, -5, -7], 16))
}
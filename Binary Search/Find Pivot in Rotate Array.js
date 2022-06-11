function findPivot( arr) {
    let start = 0, end = arr.length - 1;
    while (start <= end) {
        let mid =Math.floor(start + (end - start) / 2)
        // 4 cases over here
        if (mid < end && arr[mid] > arr[mid + 1]) {
            return mid
        }
        if (mid > start && arr[mid] < arr[mid - 1]) {
            return mid-1;
        }
        if (arr[mid] <= arr[start]) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }
    return -1;
}
console.log(findPivot([8,9,10,1,2,3,4,5,6,7]))
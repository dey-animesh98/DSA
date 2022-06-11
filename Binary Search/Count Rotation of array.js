function rotateCount( arr) {
    let start = 0, end = arr.length - 1;
    while (start <= end) {
        let mid =Math.floor(start + (end - start) / 2)
        // 4 cases over here
        if (mid < end && arr[mid] > arr[mid + 1]) {
            return mid+1
        }
        if (mid > start && arr[mid] < arr[mid - 1]) {
            return mid;
        }
        if (arr[mid] <= arr[start]) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }
    return 0;
}
console.log(rotateCount([8,9,10,1,2,3,4,5,6,7]))
//Rotate array by k times
// reverse a array without using extra array--1
{

    function rev(arr) {
        let i = 0, j = arr.length - 1
        while (i < j) {
            arr[i] = arr[i] + arr[j]
            arr[j] = arr[i] - arr[j]
            arr[i] = arr[i] - arr[j]
            i++
            j--
        }
        return arr
    }
    function rotateArr(arr, k) {
        if (k === arr.length) {
            return arr
        }
        if (k > arr.length) {
            k = k % arr.length
        }
        let roated = rev(arr)
        let firstR = rev(roated.slice(0, k))
        let lastR = rev(roated.slice(k))
        return [...firstR, ...lastR]
    }

    console.log(rotateArr([1, 2, 3, 4, 5, 6, 7],2))
}

{
    const rotate = function (nums, k) {
        let n = nums.length - 1
        for (let i = n - 1; i >= n - k; i--) {
            let ele = nums.pop()
            nums.unshift(ele)
        }
        return nums
    };
}
//--
{
    const rotate = function (nums, k) {
        if (nums.length < k) k = k % nums.length;

        const temp = nums.splice(nums.length - k, k);
        nums.unshift(...temp);

        return nums
    }
    // console.log(rotate([1,2,3,4,5,6,7], 3))

}

////////////NOT COMPLETED//////////////////////
{

    const rotate = function (nums, k) {
        if (nums.length < k) {
            k = k % nums.length
        }
        let start = nums.length - k, end = nums.length - 1
        while (start < end) {
            let temp = nums[start]
            nums[start] = nums[end]
            nums[end] = temp
            start++
            end--
        }
        console.log(nums)
        // let newStart = 0, end = nums.length-1
        // while()
    }
    console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3))
}

/*
{
     function swap(a, b) {
     // function swap(a, b) {
    //     a = a + b
    //     b = a - b
    //     a = a - b
    //     return
    // }
        return 
    }
    // console.log(swap(7,8))
    function rev(arr) {
        let i = 0, j = arr.length - 1
        swap(arr[i], arr[j])
        // while (i < j) {
        //     i++
        //     j--
        // }
        console.log(arr)
        return arr

    }
    console.log(rev([2, 8, 1, 9]))

}*/
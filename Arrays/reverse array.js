// Reverse a array without using extra array---1
{
    function revArray1(arr) {
        let start = 0
        let end = arr.length - 1
        while (start < end) {
            let temp = arr[start]
            arr[start] = arr[end]
            arr[end] = temp
            start++
            end--

        }
        return arr
    }

    console.log(revArray1([1, 2, 3, 4, 5, 6, 7, 8, 9]))
}

// Rverse a array without using extra array---2
{
    function revArray2(arr) {
        let left = 0, right = arr.length - 1
        while ((left < right)) {
            [arr[left], arr[right]] = [arr[right], arr[left]]
            left++
            right--
        }
        return arr
    }
    console.log(revArray2([1, 2, 3, 4, 5, 6, 7, 8, 9]))
}

// Rverse a array without using extra array---3 
//***Applicable for only integer Arrays
{
    function revArray3(arr) {
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
    console.log(revArray3([1, 2, 3, 4, 5, 6, 7, 8, 9]))
}









//Under Construction👷🏼👷🏼‍♂️🚧
/**
 * 
 * 
 *  // function swap(a, b) {
    //     a = a + b
    //     b = a - b
    //     a = a - b
    //     return
    // }

    //swap(arr[i], arr[j])
 */
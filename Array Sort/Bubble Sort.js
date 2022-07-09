// Bubble Sort is also known as Sinking sort / Exchanging Sort  / In place sorting algo.(Aka => Also Known as)
// Time Complexity => Best Case (if array is alredy sorted ) O(n)
// Time Complexity => Wrost case (if array sorted in opposite order) O(n^2) 
// Bubble Sort is Stable sorting Because the original order is maintained for duplicated values

//Reference:
// http://www.algolist.net/Algorithms/Sorting/Bubble_sort
{
    function bubbleSort(array) {

        for (let i = 0; i < array.length - 1; i++) {
            let sorted = true
            for (let j = 1; j < array.length - i; j++) {
                if (array[j] < array[j - 1]) {
                    let temp = array[j - 1]
                    array[j - 1] = array[j]
                    array[j] = temp
                    sorted = false

                }
            }
            if (sorted)
                break;
        }
        return array
    }
    // console.log(bubbleSort([4, 3, 1]))
}

//-- Method 2
{
    const bubbleSort2 = (nums) => {
        let swapped = true;
        while (swapped) {
            swapped = false;
            for (let i = 0; i < nums.length - 1; i++) {
                if (nums[i] > nums[i + 1]) {
                    let temp = nums[i];
                    nums[i] = nums[i + 1];
                    nums[i + 1] = temp;
                    swapped = true;
                }
            }
        }
        return nums;
    };
    // console.log(bubbleSort2([2, 45, 54, -89, 23, 2, 74, 112, -56, 1, 0]))
}


// let array = [1, 2, 3, 4, 5]

// for (let i = 0; i < array.length; i++) {
//     for (let j = 0; j < array.length; j++) {

//         console.log(array[j])
//     }

// }


//Custom Input // a = 1 Descending Order, a = 0 Ascending Order, N = arr.length 
{
    function solution(a, n, arr) {
        //Write your solution here

        for (let i = 0; i < n - 1; i++) {
            let sorted = true
            for (let j = 1; j < n - i; j++) {
                if (a === 0) {
                    if (arr[j] < arr[j - 1]) {
                        [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]]
                        sorted = false
                    }
                } else if (a === 1) {
                    if (arr[j] > arr[j - 1]) {
                        [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]]
                        sorted = false
                    }
                }
            }
            if (sorted) break;
        }
        return arr.join(' ')
    }
}
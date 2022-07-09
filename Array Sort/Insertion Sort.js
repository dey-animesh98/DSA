// Best case (Already sorted) TC- O(n) total (n-1) comparions
// Wrost case (Oppostie oreder sorted) - O(n^2)
// Why Insertion Sort
// Adaptive- number of swaps reduce if sorted(as compare to bubble sort)
// Insertion Sort is Stable sorting Because the original order is maintained for duplicated values
// Works well when array is partially sorted
// its takes part hybrid sorting algorithm=> (combining of multiple sort algorithms)
//T.C ->O(n^2)
//S.C ->O(n) //size of array


// Reference:
// http://www.algolist.net/Algorithms/Sorting/Insertion_sort

//Best for small array

function insertionSort(arr) {

    for (let r = 1; r < arr.length; r++) {
        let curr = r
        while (curr >= 1 && arr[curr - 1] > arr[curr]) {
            [arr[curr - 1], arr[curr]] = [arr[curr], arr[curr - 1]]
            curr--
        }
    }
    return arr
}

console.log(insertionSort([9, 6, 2, 7, 8, 3, 1, 5, 9, 12, 78, -2, 0, -12]))


//Custom Input // a = 1 Descending Order, a = 0 Ascending Order, N = arr.length 

{
    function solution(a, n, arr) {
        //Write your solution here
        for (let i = 1; i < n; i++) {
            let curr = i
            if (a === 0) {
                while (curr >= 1 && arr[curr] < arr[curr - 1]) {
                    [arr[curr], arr[curr - 1]] = [arr[curr - 1], arr[curr]]
                    curr--
                }
            } else if (a === 1) {
                while (curr >= 1 && arr[curr] > arr[curr - 1]) {
                    [arr[curr - 1], arr[curr]] = [arr[curr], arr[curr - 1]]
                    curr--
                }
            }
        }
        return arr.join(' ')
    }
}
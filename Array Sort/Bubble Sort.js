// Bubble Sort is also known as Sinking sort / Exchanging Sort  / In place sorting algo.(Aka => Also Known as)
// Time Complexity => Best Case (if array is alredy sorted ) O(n)
// Time Complexity => Wrost case (if array sorted in opposite order) O(n^2) 
// Bubble Sort is Stable sorting Because the original order is maintained for duplicated values

{
    function bubbleSort(array) {
        let sorted = true
        for (let i = 0; i < array.length; i++) {
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
    console.log(bubbleSort([5,45,3,-12,2,4,21,20]))
}
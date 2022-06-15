// Time Complexity => Best Case (if array is alredy sorted ) O(n^2)
// Time Complexity => Wrost case (if array sorted in opposite order) O(n^2) 
// Selection Sort is not Stable sorting Because the original order is not maintained for duplicated values

{
    function SelectionSort(array) {
        let sorted = true
        for (let i = 0; i < array.length; i++) {
            let min = i
            for (let j = i + 1; j < array.length; j++) {
                if (array[j] < array[min]) {
                    min = j
                }
            }
            if (i !== min) {
                let temp = array[i]
                array[i] = array[min]
                array[min] = temp
                sorted = false
            }
            if (sorted)
                break;
        }
        return array
    }
    // console.log(SelectionSort([12,-5,7,-12,0,32,46]))
}

console.log(Math.sqrt())

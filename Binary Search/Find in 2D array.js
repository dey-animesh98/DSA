//Find the target element in sorted multidimentional array.
{
    function findElement(arr, target) {
        let row = 0, col = arr[0].length - 1
        while (row < arr.length && col >= 0) {
            if (arr[row][col] == target) {
                return `${row},${col}`                              //[row,col]
            }
            if (arr[row][col] < target) {
                row++
            } else {
                col--
            }
        }
        return `-1,-1`
    }
}

console.log(findElement([[1, 3]], 3))
//     console.log(findElement([
//         [10, 12, 16, 19],
//         [13, 18, 25, 28],
//         [16, 20, 27, 35],
//         [20, 24, 30, 38]], 26))
// }


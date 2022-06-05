//Find the element in the array return the index of the element else return -1 >>>>>>Linear Search O(n)<<<<<<<<
function findElement(array, target) {
    if (array.length == 0) {
        return -1
    }
    for (let i = 0; i < array.length; i++) {
        if (array[i] == target) {
            return 'Hey! I got your target at ' + i + "th index."
        }
    }
    return -1
}
const arr = [6, 55, 7, 4, 77, 221, 45, 447, 3, 47, 5]
const tar = 47
// const res = findElement(arr, tar)
// console.log(res)
{
    //Method 2 Less Reduced Time (use sort) But not able get actual index of element.
    function findElement2(array, target) {
        if (array.length == 0) {
            return -1
        }
        array.sort((a, b) => a - b)
        for (let i = 0; i < array.length; i++) {
            if (array[i] > target) {
                return -1
            }

            if (array[i] == target) {
                return 'Hey! I got your target.'
            }
        }
        return -1
    }
    const arr = [6, 55, 7, 4, 77, 221, 45, 447, 3, 47, 5, -5, -8]
    const tar = 45
    // const res = findElement2(arr, tar)
    // console.log(res)

}

{
    let array = [5, 4, 7, 9, 3, 9, 17, 21, 23]
    let getIndex = array.forEach((e, i) => {
        if (e == 9) {
            // console.log(e)
        }
    })
}


// Find Element in 2D Array
{
    function findEle2D(array, target) {
        for (let row = 0; row < array.length; row++) {
            if (array[row] == target) {
                return [row]
            }
            for (let col = 0; col < array[row].length; col++) {
                if (array[row][col] == target) {
                    return [row, col]
                }
            }
        }
        return -1
    }
    const arr = [5, [2, 21, 7], 21, [12, 32, 4], [17, 21], [23, 25, 7]]
    const tar = 21
    const res = findEle2D(arr, tar)
    console.log(res)
}

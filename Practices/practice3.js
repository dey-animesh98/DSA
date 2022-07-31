//Insertion Sort
function s(arr) {
    for (let i = 1; i < arr.length; i++) {
        let curr = i
        while (curr >= 0 && arr[curr] < arr[curr - 1]) {
            [arr[curr], arr[curr - 1]] = [arr[curr - 1], arr[curr]]
            curr--
        }
    }
    return arr
}

// console.log(s([10, 7, 12, 3, 1, 5, 6, -1, 0, 12, -30, -45, -1, 125, 125, 10, 125]))

// Bubble Sort
function s1(arr) {

    for (let i = 0; i < arr.length-1; i++) {
        let sorted = true
        for (let j = 1; j < arr.length - i ; j++) {
            if (arr[j] < arr[j - 1]) {
                [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]]
                sorted = false
            }
        }
        if (sorted) {
            break
        }
    }
    return arr
}
// console.log(s1([10, 7, 12, 3, 1, 5, 6, -1, 0, 12, -30, -45, -1, 125, 125, 10, 125])).


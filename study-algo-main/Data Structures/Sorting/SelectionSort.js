/**
 * Maintains 2 subarrays - sorted and unsorted
 * Selects the min element from the unsorted elemnet and puts it to the sorted array in every iteration
 */

let selectionSort = (a) => {
    let n = a.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = i + 1; j < n; j++) {
            if (a[j] < a[i]) {
                [a[j], a[i]] = [a[i], a[j]]
            }
        }
    }

    return a;
};

console.log(selectionSort([2, 7, 6, -8, 78, 65, 32, 45, -56, 78, -56, -123]))
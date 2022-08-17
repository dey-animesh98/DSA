/**
 * We call the recusive function on the saller part and the bigger part is handled iteratively
 */

function quickSort(arr, low, high) {
    while (low < high) {
        /* pi is partitioning index, arr[p] is now
           at right place */
        var pi = partition(arr, low, high);

        // If left part is smaller, then recur for left
        // part and handle right part iteratively
        if (pi - low < high - pi) {
            quickSort(arr, low, pi - 1);
            low = pi + 1;
        }

        // Else recur for right part
        else {
            quickSort(arr, pi + 1, high);
            high = pi - 1;
        }
    }
    return arr
}


console.log(quickSort([2,78,3,1,8,7,12,45,7,863,-21,-45,0,1,78]))
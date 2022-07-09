/*
// Best for Hybrid sort
//T.C - 
// Best Case - (n log n)
// Average Case - (n log n)
// Wrost Case - O (n^2)

// It takes less memory than merge sort

*** Wrost occurs when pivot element is the smallest ele or largest ele -> in case of Array already sorted in Asc or desc order.
[1,2,3,4,5]    -> n  = 5
[1,2,3,4]      -> n-1 = 4
[1,2,3]        -> n-2 = 3
[1,2]          -> n-3 = 2
[1]            -> n-4 = 1
                Total = 5+4+3+2+1 = 10

                n * (n+1) / 2 = 5 *(5+1) /2   



*/




{
    function partition(arr, low, high) {
        //last index is pivot
        let pivot = arr[high]  
        // i is a place maker for smaller element than pivot . here we assuming there
        // are no smaller element than pivot so take low -1 i.e = -1
        let i = low - 1

        //traversing tbe array and comparing the elements with pivot
        for (let j = low; j < high; j++) {
            if (arr[j] < pivot) {
                //if element is less than pivot i will increase and make place for the element
                i++
                // swapping the element 
                [arr[i], arr[j]] = [arr[j], arr[i]]
            }
        }
        // Placing the pivot in correct position
        i++
        arr[high] = arr[i]
        arr[i] = pivot
        return i
    }


    function quickSort(arr, low, high) {
        if (low < high) {
            // will i means the correct index of pivot ele
            let pivotIdx = partition(arr, low, high)

            //Re partitioning for sort both sides pivot elements
            quickSort(arr, low, pivotIdx - 1) // left 
            quickSort(arr, pivotIdx + 1, high) // right
        }
        return arr
    }

    let arr = [2, 5, 1, 7,88,-10,12,45,23, 9, 3, 5, 4]
    let n = arr.length
    console.log(quickSort(arr, 0, n - 1))

}


/**
 * function quickSort(arr, left, right) {


}

function partition(arr, left, right) {
    let pivot = arr[Math.floor((right + left) / 2)]
    i = left
    j = right

    while (i <= j) {
        while (arr[i] < pivot) {
            i++
        }

        while (arr[j] > pivot) {
            j--
        }

        if (i <= j) {
            [arr[i], arr[j]] = [arr[j], arr[i]]
            i++
            j--
        }
    }
    return i //returning left pointer
}
// console.log(quickSort([8, 2, -3, 4, 2, 7, 1, 5]));

/**
 * let items = [5,3,7,6,2,9]

function quicksort(items, left, right){
    let index;

    if (items.length > 1){
        index = partition(items, left, right)
    }
    //more  elements on left side
    if (left < index -1){
        quicksort(items, left, index -1)
    }

    // right side elements
    if (index < right){
        quickSort(items, index, right);
    }
    return items
}

function partition(items, left, right){
    let pivot = items[Math.floor((right + left) / 2)]
    console.log('pivot====', pivot)
    i = left,
    console.log('left====', pivot)
    j = right,
    console.log('right====', pivot)

    while(i<=j){
        //increment left pointer
        console.log('items====', items[i], pivot)
        while (items[i] < pivot){
            console.log('coming here in first inner loop')
            i++;
        }

        // decrement right pointer
        while(items[j] > pivot){
            console.log('coming here in second inner loop')
            j--;
        }

        // swaping
        if (i<=j){
            [items[i], items[j]] = [items[j], items[i]]
            
            i++;
            j--;
        }
    }
    return i;//left pointer
}

Shubham’s Sir Code which he has asked you all to debug.
 */














/**
 * function partition(items, left, right) {
    let pivot = items[Math.floor((right + left) / 2)];
    let i = left;
    let j= right;

    while (i <= j) {
        while (items[i] < pivot) {
            i++;
        }
        while (items[j] > pivot) {
            j--;
        }
        if (i <= j) {
            [items[i] , items[j]] = [items[j] , items[i]]
            i++;
            j--;
        }
    }
    return i;
}


function quickSort(items, left, right) {
    let index;
    if (items.length > 1) {
        index = partition(items, left, right); 
        if (left < index - 1) { 
            quickSort(items, left, index - 1);
        }
        if (index < right) { 
            quickSort(items, index, right);
        }
    }
    return items;
}



let arr = [45,67,8784,342,56,6767]

console.log( quickSort(arr,0,arr.length-1))


 */
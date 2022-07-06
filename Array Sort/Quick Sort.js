

function quickSort(arr, left, right) {


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
console.log(quickSort([8, 2, -3, 4, 2, 7, 1, 5]));

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
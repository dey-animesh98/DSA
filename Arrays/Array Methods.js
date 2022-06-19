//--Some Addition Array methods
{
    let a = [1, 2, 3]
    let b = [1, 2, 3]

    // console.log(a==b) //false

    var array1 = [10, 6, 19, 16, 14, 15, 2, 9, 5, 3, 4, 13, 8, 7, 1, 12, 18, 11, 20, 17];
    var array2 = [12, 18, 20, 11, 19, 14, 6, 7, 8, 16, 9, 3, 1, 13, 5, 4, 15, 10, 2, 17];
    // console.log(typeof array1.sort().join(','))

    if (array1.sort().join('') === array2.sort().join('')) {
        console.log('same members');
    }
    else console.log('not a match');
}

/////Array.flat()
{
    // 3 nested arrays 
    let numbers = [[1, 2, 5], [4, 7, 7], [4, 8, 8]] //[1, 2, [3, 4, [5, 6, [7, 8]]]];

    // reducing nesting by flattening the array to depth 2 
    let flattenArray = numbers.flat(1); //<-- this is the depth how much depth we want to flat by default is 1.

    // new flatten array
    console.log(flattenArray);

    // Output:
    // [ 1, 2, 3, 4, 5, 6, [ 7, 8 ] ]
}

{
    // array with empty slots
    let array_with_holes = [1, , 3];

    // removes holes in the array
    let flattedArray = array_with_holes.flat();

    console.log(flattedArray); // [ 1, 3 ]
}

//////FOR- EACH
{
    function printElements(element, index) {
        console.log('Array Element ' + index + ': ' + element);
    }

    const prices = [1800, 2000, 3000, , 5000, 500, 8000];

    // forEach does not execute for elements without values
    // in this case, it skips the third element as it is empty
    prices.forEach(printElements);
}



//Swap two numbers
{//Swap the number --1
    let a = 4
    let b = 9

    b = b - a   // b = 5 | a = 4
    a = a + b   // b = 5 | a = 9
    b = a - b   // b = 4 | a = 9
    // console.log(a, b)
}

{//Swap the number --2
    let a = 7
    let b = 6

    a = a + b // a = 13 | b = 6
    b = a - b // b = 7 | a = 13
    a = a - b // b = 7 | a = 6
}


//Swap New -3
function swapNew(n1, n2) {
    [n1, n2] = [n2, n1]
    return [n1, n2]

}

//Swap --4 with extra space
{
    function  swap(a,b) {
        let temp = a
        a = b
        b = temp
        return [a,b].join(' ')
    }
    console.log(swap(2,3))
}
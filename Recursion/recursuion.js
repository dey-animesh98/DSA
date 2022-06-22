let i = 1
function rec() {
    console.log("Hello", i)
    i++
    rec()

}
// rec()        //Maximum call stack size exceeded

function factorial(n) {
    return n === 0 ? 1 : n * factorial(n - 1)
}
// console.log(factorial(5))

function myFun(a) {

    return `Hi ${a}`
}
// console.log(myFun("ani"))

function printN(n) {
    if (n > 0) {
        printN(n - 1)
    }
    console.log(n)
}
// printN(10)

{
    function divBy5(arr) {
        if (arr.length == 0) return
        else {
            let ele = arr.pop()
            if (ele % 5 == 0) {
                console.log(ele)
            }
        }
        divBy5(arr)
    }
    // divBy5([10,11,14,20,21,25])
}
{
    function addUpto(n) {
        if (n == 1) return 1
        return (n + addUpto(n - 1))
    }
    // console.log(addUpto(5))
}

{
    function printDec(n) {
        if (n == 0) {
            // console.log(n)
            return
        }
        console.log(n)
        printDec(n - 1)
        console.log(n)
    }
    // printDec(5)

}

{
    function printNum(n) {
        if (n == 5) {
            console.log(n)
            return
        }
        console.log(n)
        printNum(n + 1) // aka Tail recursion - single function at last.
    }
    // printNum(1)
}
//All even nums in the range
//16--25 F

{
    function allEven(n1, n2) {

        // Base case
        if (n1 > n2) return;

        // Recurrence relation
        if (n2 % 2 == 0) {
            allEven(n1, n2 - 2);
        }
        else {
            allEven(n1, n2 - 1);
        }

        // Check if n2 is even
        if (n2 % 2 == 0) {
            console.log(n2);
        }
    }
    // allEven(16, 25)
}
//All even nums in the range
{
    {
        function allEven1(n1, n2) {
            // Base case
            if (n1 > n2) return
            // Recurrence relation
            allEven1(n1, n2 - 1);
            // Check if n2 is even
            if (n2 % 2 == 0) {
                console.log(n2)
            }
        }
        // allEven1(20, 25)
    }
}
//All even nums in the range
{
    function allEven2(n1, n2) {
        if (n1 > n2) return ""
        let k = 0
        if (n1 % 2 !== 0) n1++
        k = n1 + " " + allEven2(n1 + 2, n2)
        return k
    }
    //    console.log(allEven2(31, 35)) 
}
//Palindrome-1
{
    function isPalin(str) {
        if (str.length == 1) return true
        if (str[0] == str[str.length - 1]) return isPalin(str.slice(1, -1))
        else return false

    }
    // console.log(isPalin('12354321'))
}
// Palindrome method -2
{
    function isPalin2(str, start, end) {
        if (start < end) {
            if (str[start] === str[end]) {
                return isPalin2(str, start + 1, end - 1)
            } else {
                return false
            }
        }
        return true
    }
    let st = '1235321'
    console.log(isPalin2(st, 0, st.length - 1))
}
//Reverse string-1
{
    function rev(str) {
        if (str.length <= 0) return str
        return rev(str.slice(1)) + str[0]
    }
    // console.log(rev("hello"))
}
//Reverse Number
// function reverseInt2(num) {
//     let rev = 0
//     while (num > 0) {
//         let rem = num % 10
//         num = Math.floor(num / 10)
//         rev = rev * 10 + rem
//     }
//     return rev
// }
{
    function revNum(num) {
        if (num > 0) {
            let rem = num % 10

        }
    }
}

//flat map
{
    function flatArr(arr) {
        let flat = []
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] == undefined) continue
            if (!Array.isArray(arr[i])) {
                flat.push(arr[i])
            } else {
                flat = flat.concat(flatArr(arr[i]))
            }
        }
        return flat
    }
    // console.log(flatArr([[2,3],5,7,[2,[7,9],[1,5]]]))
    // console.log(flatArr([121, 2, 5, , 5, 6, 5]))
}

// Capitalize first letter
{//With recursion
    function capitalizeR(arr) {
        if (arr.length <= 0) return
        // if (str == undefined) continue
        let str = arr[0]
        str = str[0].toUpperCase() + str.slice(1)
        return [str].concat(capitalizeR(arr.slice(1)))
    }
    // console.log(capitalizeR(['hola', 'mola', 'chola', 'gola']))
}

{// Without recursion
    function capitalize(arr) {
        let capArr = []
        for (let i = 0; i < arr.length; i++) {
            let str = arr[i]
            str = str[0].toUpperCase() + str.slice(1)
            capArr.push(str)
        }
        return capArr
    }
    // console.log(capitalize(['hola', 'mola', 'chola']))
}


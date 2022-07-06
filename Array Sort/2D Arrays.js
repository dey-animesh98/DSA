//find the richest person

function richest(arr) {
    let max = 0

    for (let i = 0; i < arr.length; i++) {
        let currSum = 0
        for (let j = 0; j < arr[i].length; j++) {
            currSum += arr[i][j]
            if (currSum > max) {
                max = currSum
            }
        }
    }
    return max
}

// console.log(richest([[2,3,4],[5,1,3],[7,1,6]]))

function totalSum(banks) {
    let totalAmont = 0
    for (let balance of banks) {
        totalAmont += balance
    }
    return totalAmont
}


function richestperson(accounts) {
    let maxAmount = -Infinity
    for (let customer of accounts) {
        maxAmount = Math.max(totalSum(customer), maxAmount)
    }
    return maxAmount
}

// console.log(richestperson([[2, 3, 4], [5, 1, 3], [7, 1, 6]]))


//Return the data that how many times each animal repeated

function animalFreqCount(animals) {
    let animalFre = {}

    for (let animal of animals) {
        if (animalFre[animal]) {
            animalFre[animal] += 1
        } else {
            animalFre[animal] = 1
        }
    }
    return animalFre
}

// console.log(animalFreqCount(["dog", "pussy", "cook", "dog", "lion", "pussy", "cat"]))

//Convert an array of numbers to array of stings in such that if number was 1,2,3,4 then strings would have values like in
// 1:a in 2 :ab in 3 : abc .. e.g [2,5] => [ab, abcde]
//T.C -> O(26n)



function convertNumber(num) {

    let alphabets = "abcdefghijklmnopqrstuvwxyz"
    let finalStr = '', currIndex = 0
    while (currIndex < num) {
        finalStr += alphabets[currIndex % 26]
        currIndex++
    }
    return finalStr
}
// console.log(convertNumber(2))

function cn(num) {
    let alphabets = "abcdefghijklmnopqrstuvwxyz"
    let res = alphabets.slice(0, num)
    return res
}
// console.log(cn(26))


//--
function convertArray(arr) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = convertNumber(arr[i])
    }
    return arr
}

// console.log(convertArray([2, 5, 3]))

//Optimize 
//T.C -> O(maxNum) + O(2n) -> 
function convertArrayOp(arr) {

    let maxNum = Math.max(...arr)
    let encodeArray = ['']

    for (let i = 1; i <= maxNum; i++) {
        encodeArray.push(convertNumber(i))
    }

    for (let i = 0; i < arr.length; i++) {
        arr[i] = encodeArray[arr[i]]
    }
    return arr
}
console.log(convertArrayOp([2, 5, 3, 2, 2, 1, 5, 2, 1, 3, 1, 5, 2, 3, 1, 4, 2, 3, 1, 2, 5, 6, 1, 2, 5, 3, 2, 1, 2, 2]))


function f1() {
    for (let i = 1; i <= 5; i++) {
        setTimeout(() => {
            console.log(i)
        }, i * 1000);
    }
    console.log("hi")
}

// f1()
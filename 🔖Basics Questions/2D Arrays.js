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




//Convert an array of numbers to array of stings in such that if number was 1,2,3,4 then strings would have values like in
// 1:a in 2 :ab in 3 : abc .. e.g [2,5] => [ab, abcde]
//T.C -> O(26n)





function f1() {
    for (let i = 1; i <= 5; i++) {
        setTimeout(() => {
            console.log(i)
        }, i * 1000);
    }
    console.log("hi")
}

// f1()
function subArray(arr, n) {

    // Pick starting point
    for (let i = 0; i < n; i++) {
        // Pick ending point
        for (let j = i; j < n; j++) {
            // Print subarray between current
            // starting and ending points
            for (let k = i; k <= j; k++)
                console.log(arr[k] + " ");

        }
    }
}
// subArray([1,2,3,4],4)

///Memoization
{

    function square(n, prevValue = []) {
        if (prevValue[0] != null) {
            return prevValue[0]
        }
        let res = 0
        for (let i = 1; i <= n; i++) {
            for (let j = 1; j <= n; j++) {
                res += 1
            }
        }
        prevValue[0] = res
        return res
    }
    // console.time()
    // console.log(square(30000))
    // console.timeEnd()
}


/**    console.log(square(30000))
    console.log(square(30000))
    console.log(square(30000))
    console.log(square(30000))
    console.log(square(30000)) */


let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < i + 2; j++) {
        // console.log(i,j)
    }

}


// let a = 0
// while (a++ < 5 - ++a) {
//     console.log("ok")

// }


/**
 * // Returns true if C is an interleaving 
    // of A and B, otherwise returns false 
    Iterate through all characters of C. 
    // Match first character of C with first character 
            // of A. If matches them move A to next 
            Else Match first character of C with first 
            // character of B. If matches them move B to next
            // If doesn't match with either A or B, then return 
            // false 
            // Move C to next for next iteration
            // If A or B still have some characters, 
        // then length of C is smaller than sum 
        // of lengths of A and B, so return false
 */

/**
 * N = 10
A[] = {6,1,2,8,3,4,7,10,5}
Output: 9

 */
{
    function missing(arr, N) {
        let arrSum = 0
        for (let ele of arr) {
            arrSum += ele
        }
        let sum = N * (N + 1) / 2
        return sum - arrSum
    }
    let N = 10
    let arr = [6, 1, 2, 8, 3, 4, 7, 10, 5]
    // console.log(missing(arr, N))
}

/*
var frequencySort = function(s) {
    let hash = {}
    
    for (let char of s) {
        if (!hash[char]) hash[char] =1
        else hash[char]++
    }
        
    const t = Object.entries(hash).sort((a,b) => b[1] - a[1])
    
    let o = '';
    
    for (let arr of t) {
        for (let i=0; i<arr[1]; i++) {
            o+=arr[0]
        }
    }
    
    return o
};
*/

function richest(arr) {
    let maxSum = 0
    for (let i = 0; i < arr.length; i++) {
        let currSum = 0
        for (let j = 0; j < arr[i].length; j++) {
            currSum += arr[i][j]
        }
        if (currSum > maxSum) {
            maxSum = currSum
        }
    }

    return maxSum
}

// console.log(richest([[2, 6, 1], [3, 4, 9], [5, 1, 3], [8, 7, 9]]))

/*{
    const reducedAccounts = accounts.map(user => {
        let sum = 0;
        for(const account of user) {
            sum += account;
        }
        return sum;
    });
    
    return Math.max(...reducedAccounts);
}
*/
// function calculatetotalSum(bank){
    //    let totalAmmount =0
    //    for(let money of bank ){
    //     totalAmmount+=money
    //    }
    //    return totalAmmount
    // }
    // function richestPerson(accounts){
    //     let maxAmmount= 0
    //     for(let customes of accounts){
    //         maxAmmount= Math.max(calculatetotalSum(customes),maxAmmount)
    //     }
    //     return maxAmmount
    // }
    // console.log(richestPerson([[1,4,2],[2,3,1],[7,1,0]]))


    function generateString(num) {
        let alpha = 'abcdefghijklmnopqrstuvwxyz'
        let str = ''
        for (let i = 0; i < num; i++) {
            str += alpha[i]
        }
        return str
    }

    // function converArr(arr) {
    //     for (let i = 0; i < arr.length; i++) {
    //         arr[i] = generateString(arr[i])            
    //     }
    //     return arr
    // }
    // console.log(converArr([2,1,3,4]))

    function converArr2(arr) {
        let convertedArr = ['']
        for (let i = 0; i < arr.length; i++) {
            convertedArr.push(generateString(i))          
        }
        
        return convertedArr
    }
    console.log(converArr2([2,1,5,4]))
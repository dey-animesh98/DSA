function generateString(num) {
    let alpha = 'abcdefghijklmnopqrstuvwxyz'
    let str = ''
    for (let i = 0; i < num; i++) {
        str += alpha[i]
    }
    return str
}
//console.log(generateString(5))
// function converArr(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         arr[i] = generateString(arr[i])            
//     }
//     return arr
// }
// console.log(converArr([2,1,3,4]))

function converArr2(arr) {
    let convertedArr = ['']
    let max = Math.max(...arr)

    for (let i = 1; i <= max; i++) {
        convertedArr.push(generateString(i))
    }

    for (let j = 0; j < arr.length; j++) {
        arr[j] = convertedArr[arr[j]]
    }
    return arr
}
console.log(converArr2([2, 1, 5, 4]))

//--
{
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
    
}
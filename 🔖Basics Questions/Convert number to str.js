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
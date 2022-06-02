//Loop Method O(n)
function addUpto(n) {
    let sum = 0
    for (let i = 1; i <= n; i++) {
        sum += i
    }
    return sum
}
let t1 = performance.now()
// console.log(addUpto(1000000)) //15
let t2 = performance.now()
// console.log(`Loop Time consumed:${(t2-t1)/1000}`)

//Optimize Linear Time complexity
function addUpto2(n) {
    return n * (n + 1) / 2
    // return (n/2)*(n+1)
}
let t3 = performance.now()
// console.log(addUpto2(1000000)) //15
let t4 = performance.now()
// console.log(`Optimize Time consumed:${(t4-t3)/1000}`)
// console.log(performance.now(), Date.now())


// Adding of Array of numbers
function sumInt(arr) {
    let sum = 0
    for (i = 0; i < arr.length; i++) {   //for( const num of arr)
        sum += arr[i]
    }
    return sum
    //return arr.reduce((sum, currNum)=> sum+currNum,0)
}
let t5 = performance.now()
console.log(sumInt([5, 4, 7, 3, 8, 7, 1, 6, 8, 4, 4544, 545454, 545454, 988754, 5454, 121, 8, 564]))
let t6 = performance.now()
console.log(`O(n) time:${(t6 - t5) / 1000}`)
//For this function this is most optimize solution O(n)


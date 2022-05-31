//Loop Method O(n)
function addUpto(n){
    let sum = 0
    for(let i=1; i<=n;i++){
        sum +=i
    }
    return sum
}
let t1 = performance.now()
console.log(addUpto(1000000)) //15
let t2 = performance.now()
console.log(`Loop Time consumed:${(t2-t1)/1000}`)

//Optimize O
function addUpto2(n){
    return n*(n+1)/2
}
let t3 =performance.now()
console.log(addUpto2(1000000)) //15
let t4 = performance.now()
console.log(`Optimize Time consumed:${(t4-t3)/1000}`)
// console.log(performance.now(), Date.now())

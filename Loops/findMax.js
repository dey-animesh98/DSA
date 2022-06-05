 //Method 1
 function findMax(a,b,c) {
    let max = a
    if(b>max){
        max=b
    }
    if(c>max){
        max= c
    }
return max
}
// console.log(findMax(10,40,30))
//In Bulid 
function findMax2(a,b,c){
    return Math.max(a,b,c)
}
// console.log(findMax2(10,40,30))


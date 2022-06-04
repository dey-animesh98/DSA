// Count occurences of the number in given int num= int, n= number
function findOcc(num,n){
    let count = 0
    while(num>0){
        let rem = num % 10
        if(rem == n){
            count++
        }
        num = Math.floor(num/10)
    }
    return count
}
console.log(findOcc(1525445,3))
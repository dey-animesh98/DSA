//Reverse the int M-1
function reverseInt(num) {
    let rev = ''
    while (num > 0) {
        let rem = num % 10
        rev += rem
        num = Math.floor(num / 10)
    }
    return parseInt(rev)
}
console.log(reverseInt(123456))

//Reverse the int M-2----
function reverseInt2(num) {
    let rev = 0
    while (num > 0) {
        let rem = num % 10
        num = Math.floor(num / 10)
        rev = rev * 10 + rem
    }
    return rev
}
console.log(reverseInt2(123456))


{
    function prac(num){
        let nums =''
        while(num>0){
            let rem = num%10
            nums += rem
            num = Math.floor(num/10)

        }
        return  +nums // '+' --> convert the string to number. 
    }
    console.log(prac(56412))
}
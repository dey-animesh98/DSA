//Reverse string-1
{
    function rev(str) {
        if (str.length <= 0) return str
        return rev(str.slice(1)) + str[0]
    }
    // console.log(rev("hello"))
}

{//Real method
    function revNum(num,res=0 ) {
       if(num>0){
        return revNum(parseInt(num/10), res*10+num%10)
       }
       return res
    }
    console.log(revNum(1))
}
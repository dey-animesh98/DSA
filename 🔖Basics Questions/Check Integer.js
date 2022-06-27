// Take an input and check whether the input is an interger or
//valid Int --1
{
    function checkInt(input) {
        return input === parseInt(input)
    }
    // console.log(checkInt(56))
}


//valid Int --2

{
    function checkInt2(input) {
        if (input < 0) {
            let xx = input * 2
            input = (input - xx)
        }
        //input = Math.abs(input)
        input += ""
        let arr = input.split('')

        for (let i = 0; i < arr.length; i++) {
            if (arr[i] >= 0 && arr[i] <= 9) {
                continue
            } else {
                return false
            }
        }
        return true
    }
    // console.log(checkInt2(124))
}


//valid Int --3

//Using regex
{
    function checkInt3(input) {
        let intReg = /^-?[0-9]+$/
        let res = intReg.test(input)
        return res
    }
    //  console.log(checkInt3(23))


}
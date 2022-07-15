/**
 * Given a brackets expression, find a minimum number of bracket reversals required to make an expression balanced using Stack.

Expression-1 =  “}{“ 
Here 2 brackets reversals needed to make expression balanced “{}”.

Expression-2 = “{{” 
Here 1 bracket reversals needed to make expression balanced “{}”.

Write a function:
        int solution(char* S)

that accept brackets expression as string S. The function should return a minimum number of brackets reversals required to convert expression balanced. 
If a string can not be made balanced bracket expression then return -1.

Input
    }{

Output
    2
Assume that,

The expression contains only brackets.
brackets can be '{' and '}'.
Length of string can be [1 to 10000] 
 */

function balance(str) {
    if (str.length % 2 !== 0) return -1
    let open = 0, close = 0, rev = 0

    for (let i = 0; i < str.length; i++) {
        if (str[i] === '{') {
            open++
        } else {
            if (open === 0) {
                close++
            } else {
                open--
            }
        }
    }
    rev = Math.ceil(open / 2) + Math.ceil(close / 2)
    return rev
}


console.log(balance('}}}}}}}}}}'))

{
    function bal(str) {
        if (str.length % 2 !== 0) return -1

        let stack = []
        for (let i = 0; i < str.length; i++) {
            if (str[i] === '{') stack.push(str[i])

             if (str.length && str[i] === '}') {
                if (stack[stack.length - 1] === '{') {
                    stack.pop()
                } else {
                    stack.push(str[i])
                }
            }

        } 
        return stack.length / 2
    }
    console.log(bal('}}}}}}}}}}'))
}

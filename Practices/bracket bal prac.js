

// Valid Parenthesis


function validParen(str) {

    let stack = []

    for (let i = 0; i < str.length; i++) {
        if (str[i] === '(' || str[i] === '{' || str[i] === '[') {
            stack.push(str[i])
        }

        if (str[i] === ')') {
            if (stack.length > 0 && stack[stack.length - 1] === '(') {
                stack.pop()
            } else {
                return false
            }
        }

        if (str[i] === '}') {
            if (stack.length > 0 && stack[stack.length - 1] === '{') {
                stack.pop()
            } else {
                return false
            }
        }

        if (str[i] === ']') {
            if (stack.length > 0 && stack[stack.length - 1] === '[') {
                stack.pop()
            } else {
                return false
            }
        }

    }

    return stack.length === 0


}

// console.log(validParen(')'))





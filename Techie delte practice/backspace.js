var backspaceCompare = function (s, t) {
    let stack1 = [], stack2 = []

    for (let i = 0; i < s.length; i++) {
        if (s[i] !== '#') {
            stack1.push(s[i])
        } else if (stack1.length && s[i] == '#') {
            stack1.pop()
        }
    }

    for (let j = 0; j < s.length; j++) {
        if (t[j] !== '#') {
            stack2.push(t[j])
        } else if (stack2.length && t[j] == '#') {
            stack2.pop()
        }
    }

    return stack1.join('') == stack2.join('')
}

// console.log(backspaceCompare("ab##", "c#d#"))




function rev(str) {
    if (str.length === 1) {
        return str
    }
    return rev(str.slice(1)) + str[0]
}

function revSen(sentence) {
    let words = sentence.split(" ")
    for (let i = 0; i < words.length; i++) {
        words[i] = rev(words[i])
    }
    return words.join(' ')
}

console.log(revSen("hello how are you"))


///---Basic Gyan----//
//String is immutable 
let string = "abc"
string[0] = "d"
console.log(string) //abc
//To change the ele in string we need to take new variables
let newStr = "d" + string.slice(1)
console.log(newStr)
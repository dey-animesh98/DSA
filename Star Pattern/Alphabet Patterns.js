function alphaSqr(n) {
    let alpha = ""
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n; j++) {
            alpha += String.fromCharCode(64 + j) + " "
        }
        alpha += '\n'
    }
    console.log(alpha)
}
// alphaSqr(5)

function alphaTri(n) {
    let alpha = ""
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= i; j++) {
            alpha += String.fromCharCode(64 + j) + " "
        }
        alpha += '\n'
    }
    console.log(alpha)
}
// alphaTri(5)


function alphaTriRev(n) {
    let alpha = ""
    for (let i = 1; i <= n; i++) {
        for (let k = 0; k < n - i; k++) {
            alpha += "  "
        }
        for (let j = 1; j <= i; j++) {
            alpha += String.fromCharCode(90 - (26 - j)) + " "
        }
        alpha += '\n'
    }
    console.log(alpha)
}
// alphaTriRev(6)

var wordPattern = function (pattern, s) {
    let map = new Map(), set = new Set()
    s = s.split(' ')
    let i = 0
    for (let ele of pattern) {
        if (map.has(ele)) {
            if (map.get(ele) === s[i]) i++
            else return false
        } else {
            if (set.has(s[i])) return false
            map.set(ele, s[i])
            set.add(s[i])
            i++
        }
    }
    return true
}
let p = "aaab"
let s = "dog dog dog cat"
console.log(wordPattern(p, s))
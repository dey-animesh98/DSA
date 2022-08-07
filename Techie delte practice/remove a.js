function remove(p, up) {
    if (!up) return p
    let curr = up[0]
    if (curr == 'a') return remove(p, up.slice(1))
    else return remove(p + curr, up.slice(1))
}

// console.log(remove('', 'bcacdafasda'))


function remove2(str) {
    if (str.length === 1) {
        return str
    }
    let curr = str[0]

    if (curr == 'i') {
        return remove2(str.slice(1))
    } else {
        return curr + remove2(str.slice(1))
    }
}
// console.log(remove2('hisib'))



//Skip word
function remove3(sen) {
    if (sen.length === 1) {
        return sen
    }

    if(sen.startsWith("is")) {
        return remove3(sen.slice(2))
    } else {
        return sen.charAt(0) + remove3(sen.slice(1))
    }
}
console.log(remove3('heisaboy'))
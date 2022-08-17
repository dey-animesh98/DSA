//subset
let res = []
function subset(p, up) {
    if (!up.length) {
        res.push(p)
        return
    }

    let curr = up[0]

    for (let i = 0; i <= p.length; i++) {
        let f = p.slice(0, i)
        let s = p.slice(i, p.length)
        subset(f.concat(curr, s), up.slice(1))
    }

    return res
}

let sets = subset([], ["bar","foo","the"])


let index = []
let str = "barfoofoobarthefoobarman"
for (let i = 0; i < sets.length; i++) {
    // console.log(sets[i].join(''))
    if (str.includes(sets[i].join(''))) {
        let x = str.split(sets[i].join(''))
        index.push(x[0].length)
    }
}

console.log(index)
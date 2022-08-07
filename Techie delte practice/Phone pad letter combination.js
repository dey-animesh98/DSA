let res = []
function pad(p, up) {
    if (!up) {
        res.push(p)
        return
    }

    let digit = up[0] * 1

    for (let i = (digit - 1) * 3; i < digit * 3; i++) {
        let ch =(String.fromCharCode(97+i) )
         pad(p + ch, up.substring(1))
    }
    return res
}

console.log(pad('','22'))




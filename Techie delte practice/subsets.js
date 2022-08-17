//Subseq -> Non-adjacents collections of pairs -> Sequence of order will not change
//'abc' -> subsets ='' 'a', 'b', 'c', 'ab', 'ac', 'bc', 'abc'

//The patterns of taking some elements and ignoring some elements is called subset methods.
res = []
function subSeq(p, up) {
    if (!up.length) {
        res.push(p)
        return
    }

    let curr = up[0]

    subSeq(p + curr, up.slice(1))
    subSeq(p, up.slice(1))
    return res
}
console.log(subSeq('', 'abc'))


{//Tc -O(n * 2^n) Sc- O(2^n * n)

    function helper(p, up, result) {
        if (!up) {
            result.push(p)
            return
        }

        let curr = up[0]

        helper(p + curr, up.substring(1), result)
        helper(p, up.substring(1), result)
        return result
    }

    function subSeq2(str) {
        return helper("", str, [])
    }
    console.log(subSeq2('abc'))

}
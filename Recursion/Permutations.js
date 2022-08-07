


{
    let res = []
    function permutation2(p, up) {
        if (!up) return res.push(p)
        let ch = up.charAt(0)
        for (let i = 0; i <= p.length; i++) {
            let f = p.substring(0, i)
            let s = p.substring(i, p.length)
            permutation2(f + ch + s, up.substring(1))
        }
        return res
    }
    // console.log(permutation2("", "abc"))
}


{

    function helper(p,up,res) {
        if (!up.length) return res.push(p)
        let num = up[0]
        for (let i = 0; i <= p.length; i++) {
            let f = p.slice(0, i)
            let s = p.slice(i, p.length)
            helper(f.concat(num,s), up.slice(1),res)
        }
        return res
    }

    function permutation2(arr) {
        let res = []
       let per = helper([],arr,res)
       return per
    }
    console.log(permutation2([1,2,3]))
    // console.log("--")
    // console.log(permutation2([0,1]))
   
}

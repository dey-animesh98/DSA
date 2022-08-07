

let res = []
function subSeq(idx, str, f){
    if (idx == str.length) {
        res.push(f)
        return 
    }
    subSeq(idx + 1, str, f + str.charAt(idx));
    subSeq(idx + 1, str, f);
    return res
}

// console.log(subSeq(0, "abc", ""))

//O(2^n) -- 
let reso = []
function subSeq(input, output) {
    if(input.length === 0){
      reso.push(output)
        return
    }
    // considering Element
    subSeq(input.substring(1), output +input[0])
    //not considering
    subSeq(input.substring(1),output)
    return reso
}

console.log(subSeq("123",""))




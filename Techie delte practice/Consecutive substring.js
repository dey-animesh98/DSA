function subString(str, n) {
    let strs = "", res = []
    for (let len = 1; len <= n; len++) {
        for (let i = 0; i <= n - len; i++) {

            let j = i + len - 1;
            for (let k = i; k <= j; k++) {
                strs += str[k]
            }
            res.push(strs)
            strs = ""


        }
    }
    return res
}
// Driver program to test above function
let str = "civilwartestingwhetherth"
// console.log(subString(str, str.length));

//number of possible substrings n*(n+1)/2
//TC => O(n^2 - n)
function SubString2(str, n) {
    let res = []
    for (let i = 0; i < n; i++) {
        for (let j = i +1 ; j <= n; j++) {
            res.push(str.slice(i, j))
        }
    }
    return res
}
console.log(SubString2("abcdef", 6));

{
    function conSub(str) {
        let s = 0, res = []

        for (let i = 0; i <= str.length; i++) {
            res.push(str.slice(0, i))
        }
        return res
    }

    // console.log(conSub("abcd"))
}
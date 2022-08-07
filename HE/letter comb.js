var letterCombinations = function (digits) {
    if (!digits) return []
    let res = []
    const alpha = {
        2: "abc",
        3: "def",
        4: "ghi",
        5: "jkl",
        6: "mno",
        7: "pqrs",
        8: "tuv",
        9: "wxyz"
    }

    const dfs = (i, digits, temp) => {
        if (i === digits.length) {
            res.push(temp.join(''))
            return
        }

        let chars = alpha[digits[i]]
        for (let ele of chars) {
            temp.push(ele)
            dfs(i + 1, digits, temp)
            temp.pop()
        }
    }
    dfs(0, digits, [])
    return res
};

// console.log(letterCombinations('354'))

//O(4^n-n)-TC
//O(4^n-n)-SC


var letterCombinations2 = function (digits) {
    if (!digits) return []
    let res = []
    const alpha = {
        1: "abc",
        2: "def",
        3: "ghi",
        4: "jkl",
        5: "mno",
        6: "pqr",
        7: "stu",
        8: "vwx",
        9: "yz"
    }

    const dfs = (i, digits, temp) => {
        if (i === digits.length) {
            res.push(temp.join(''))
            return
        }

        let chars = alpha[digits[i]]
        for (let ele of chars) {
            temp.push(ele)
            dfs(i + 1, digits, temp)
            temp.pop()
        }
    }
    dfs(0, digits, [])
    return res
};

console.log(letterCombinations2('91'))
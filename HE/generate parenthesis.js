var generateParenthesis = function (n) {

    let res = []
    const dfs = (i, n, temp, oCount, cCount) => {
        if (oCount > n) return
        if (cCount > oCount) return

        if (i === n * 2) {
            res.push(temp.join(''))
            return
        }

        temp.push('(')
        dfs(i + 1, n, temp, oCount + 1, cCount)
        temp.pop()

        temp.push(')')
        dfs(i + 1, n, temp, oCount, cCount + 1)
        temp.pop()
    }

    dfs(0, n, [], 0, 0)

    return res
};

console.log(generateParenthesis(3))
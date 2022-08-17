function makeArr(arr) {
    let res = []
    for (let col = 0; col < arr.length; col++) {
        let newRow = new Array(arr.length).fill('.')
        newRow[arr[col]] = "Q"
        res.push(newRow)
    }
    return res
}

// console.log(makeArr([1,3,0,2]))


{
    const mapping = (board) => {
        let result = []
        for (let col = 0; col < board.length; col++) {
            let newRow = new Array(board.length).fill('.')
            newRow[board[col]] = "Q"
            result.push(newRow.join(''))
        }
        return result
    }


    const solveNQueens = function (n) {
        let res = []

        const dfs = (i, n, temp) => {
            let lastQ = i - 1

            for (let prevQ = 0; prevQ < lastQ; prevQ++) {
                //col conflict
                if (temp[prevQ] === temp[lastQ]) return

                //diag conflict
                let rowDiff = Math.abs(prevQ - lastQ)
                let colDiff = Math.abs(temp[prevQ] - temp[lastQ])

                if (rowDiff === colDiff) return
            }
            //base case
            if (i === n) {
                res.push(temp.slice())
                return
            }
            //Recursive
            for (let col = 0; col < n; col++) {
                temp.push(col)
                dfs(i + 1, n, temp)
                temp.pop()
            }
        }

        dfs(0, n, [])
        return res.map(board => mapping(board))
    };

    // console.log(solveNQueens(8))
}



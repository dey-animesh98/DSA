const rev = (arr) => {
    let start = 0, end = arr.length - 1
    while (start < end) {
        [arr[start], arr[end]] = [arr[end], arr[start]]
        start++
        end--
    }
    return arr
}

const rotate = function (matrix) {
    for (let r = 0; r < matrix.length; r++) {
        for (let c = r; c < matrix[r].length; c++) {
            [matrix[r][c], matrix[c][r]] = [matrix[c][r], matrix[r][c]]
        }
    }
    for (let i = 0; i < matrix.length; i++) {
        rev(matrix[i])
    }
    return matrix
};
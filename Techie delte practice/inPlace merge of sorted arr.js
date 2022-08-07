function mergeArr(x, y) {
    for (let i = 0; i < x.length; i++) {
        if (x[i] > y[0]) {
            [x[i], y[0]] = [y[0], x[i]]

            let first = y[0]
            let k = 1
            while (k < y.length && y[k] < first) {
                [y[k - 1], y[k]] = [y[k], y[k - 1]]
                k++
            }
        }
    }

    console.log(x)
    console.log(y)
}

mergeArr([1, 4, 7, 8, 11], [2, 3, 6, 9])


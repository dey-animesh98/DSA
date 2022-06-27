function uniqueMinWin(str) {
    let mapStr = new Map()
    for (let el of str) {
        mapStr.set(el, 1)
    }
    let distint = mapStr.size
    //if all chars are already unique the return the enitre string by itself
    if (str.length === distint) {
        return str
    }
    let windowMap = {}
    let i = 0, j = 0, count = 0
    let minLength = str.length
    let minStr = ""
    while (j !== str.length) {
        if (windowMap[str[j]]) {
            windowMap[str[j]] += 1
        } else {
            windowMap[str[j]] = 1
            count++
        }

        if (count < distint) {
            j++
        } else if (count === distint) {
            while (count === distint) {
                if (minLength > j - i + 1) {
                    minLength = j - i + 1
                    minStr = str.slice(i, j + 1)
                    //minimum possible substring length can't be less the distint. if we get minStr length at minimum length no need check further.
                    if (minStr.length === distint) {
                        return minStr
                    }
                }
                windowMap[str[i]]--
                if (windowMap[str[i]] === 0) {
                    count--
                }
                i++
            }
            j++
        }
    }
    return minStr
}

console.log(uniqueMinWin("abcc"))

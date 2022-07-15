
function maxWin(arr, k) {
    let max = -Infinity, dq = [], res = []

    for (let i = 0; i < k; i++) {
        while (dq.length > 0 && arr[i] >= arr[dq[dq.length - 1]]) {
            dq.pop()
        }
        dq.push(i)
        if (arr[i] > max) {
            max = arr[i]
        }
    }
    res.push(max)

    for(let j = k; j < arr.length; j++){
        while (dq.length > 0 && arr[j] >= arr[dq[dq.length - 1]]) {
            dq.pop()
        }
        while (dq.length > 0 && dq[0] <= j-k) {
            dq.shift()
        }
        dq.push(j)
        res.push(arr[dq[0]])
       
    }
  
    
    return res
}


console.log(maxWin([7, 5, 3, -1, 3, 2, 1, 5, 6, 3], 3))
{
    function sum(arr) {
        arr.sort((a, b) => a - b)
        let n = arr.length
        let sum = 0
        for (let i = arr[0]; i <= arr[n - 1]; i++) {
            sum += i
        }
        for (let j = 0; j < n; j++) {
            sum -= arr[j]
        }
        return sum
    }
    console.log(sum([11, 13, 12, 10, 15]))
}
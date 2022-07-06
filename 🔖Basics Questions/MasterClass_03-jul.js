//KPC problem
function counter(a, b) {
    let result = [];
    for (let i = a; i <= b; i++) {
        result.push(i)
    }
    return result

}
console.log(counter(2, 5))

//
function sum(arr) {
    let y = 0;
    for (let i = Math.min(...arr); i < Math.max(...arr); i++) {
        y += i
    }
    return y;
}
console.log(sum([8, 10]))

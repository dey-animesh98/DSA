let arr = ['🔴0️⃣1️⃣', '🔵1️⃣', '🟣0️⃣', '🟡1️⃣', '🟢', '🟡', '🟠', '🔴']

arr.sort()
// console.log(arr)


const a1 = [2, 8, 71, 19, 3, 1, 25, -8, 6,]

function compare(a, b) {
    if (a > b) return 1
    else if (a < b) return -1
    else 0
}


let sorted = a1.sort(compare)
console.log(sorted)

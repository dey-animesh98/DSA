//flat map
{
    function flatArr(arr) {
        let flat = []
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] == undefined) continue
            if (!Array.isArray(arr[i])) {
                flat.push(arr[i])
            } else {
                flat = flat.concat(flatArr(arr[i]))
            }
        }
        return flat
    }
    // console.log(flatArr([[2,3],5,7,[[2,[7,,,[9],[1,2,5]],5],[2,2,3]]]))
    // console.log(flatArr([121, 2, 5, , 5, 6, 5]))
}

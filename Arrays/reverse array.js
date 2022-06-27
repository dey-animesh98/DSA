{
    function revArray (arr) {
        let left = 0, right = arr.length-1
        while ((left<right)) {
            [arr[left],arr[right]] =[arr[right],arr[left]]
            left++
            right--
        }
        return arr
    }
    console.log(revArray([8,5,7,4,1,2]))
}
// XOR
{
    function findUnique(arr) {
        let unique = 0
        for (let item of arr) {
            unique = unique ^ item
        }
        return unique
    }
    console.log(findUnique([3, 4, 5, 3, 4, 7, 2, 7, 2]))
}

{
   
}
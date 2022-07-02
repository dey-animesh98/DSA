//All even nums in the range
//16--25 F

{
    function allEven(n1, n2) {

        // Base case
        if (n1 > n2) return;

        // Recurrence relation
        if (n2 % 2 == 0) {
            allEven(n1, n2 - 2);
        }
        else {
            allEven(n1, n2 - 1);
        }

        // Check if n2 is even
        if (n2 % 2 == 0) {
            console.log(n2);
        }
    }
    // allEven(16, 25)
}
//All even nums in the range
{
    {
        let count = 0
        function allEven1(n1, n2) {

            // Base case
            if (n1 > n2) return
            // Recurrence relation
            allEven1(n1, n2 - 1);
            // Check if n2 is even
            if (n2 % 2 == 0) {
                console.log(n2)
                count++

            }
            return count
        }
        // console.log(allEven1(21, 25))

    }
}
//All even nums in the range
{
    function allEven2(n1, n2) {
        if (n1 > n2) return ""
        let k = 0
        if (n1 % 2 !== 0) n1++
        k = n1 + " " + allEven2(n1 + 2, n2)
        return k
    }
    //    console.log(allEven2(31, 35)) 
}


let count = 0
var countOdds = function (low, high) {
    if (low > high) return

    if (high % 2 === 0) {
        countOdds(low, high - 1)
    } else {
        countOdds(low, high - 2)
    }
    if (high % 2 === 1) {
        count++
    }
    return count
};

console.log(countOdds(7, 10))

var countOdds = function (low, high) {
    let count = Math.floor((high - low) / 2)
    if (low % 2 !== 0 || high % 2 !== 0) count++
    return count
};
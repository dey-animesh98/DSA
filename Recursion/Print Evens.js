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
        function allEven1(n1, n2) {
            // Base case
            if (n1 > n2) return
            // Recurrence relation
            allEven1(n1, n2 - 1);
            // Check if n2 is even
            if (n2 % 2 == 0) {
                console.log(n2)
            }
        }
        // allEven1(20, 25)
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
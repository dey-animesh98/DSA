//Find the max of any two ele(without sorting array)-5
//largest and second largest num
{//it will not take two duplicate largest elements even though ele can appeared more the once.
    function large(arr) {
        let l = 0; sl = 0
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] > l) {
                sl = l
                l = arr[i]
            } else if (arr[i] > sl && arr[i] < l) {
                sl = arr[i]
            }

        }
        console.log(l, sl)
        return (l + sl)
    }
    console.log(large([5, 8, 2, 55, 55, 27, 27, 12, 15, 17, 2, 27, 8, 10, 55, 10]))
}
//--
{
    {//it will not take two duplicate largest elements if appeared more the once.
        function large(arr) {
            let l = 0; sl = 0
            for (let i = 0; i < arr.length; i++) {
                if (arr[i] >= l) {
                    sl = l
                    l = arr[i]
                }
    
            }
            console.log(l, sl)
            return (l + sl)
        }
        console.log(large([5, 8, 2, 55, 55, 27, 27, 12, 15, 17, 2, 27, 8, 10, 55, 10]))
    }
}

{
    function largestSumOfArray(arr) {

        let large = arr[0]
        let Slarge = -Infinity
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] >= large) {
                Slarge = large
                large = arr[i]
            } else if (arr[i] > Slarge) {
                Slarge = arr[i]
            }
        }
        return large + Slarge
    }
    // console.log(largestSumOfArray([2,8,7,12,45,89,100,200,200]))
}
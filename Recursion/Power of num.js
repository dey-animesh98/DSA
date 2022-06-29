{
    function power(num, pow) {
        if (pow === 0) return 1
        return num * power(num, pow - 1)
    }
    // console.log(power(2, 2))

    function sorting(nums){
        if (nums.length === 0) {
            return nums[0]
        }
        return power(nums[0],2) 
    }

    // console.log(sorting([2,4]))
}





{
    function search(long, short) {
        return long.includes(short)
    }
}
//Count of matching string
{
    function search(long, short) {
        let count = 0
        for (let i = 0; i < long.length; i++) {
            for (let j = 0; j < short.length; j++) {
                if (short[j] !== long[i + j]) {
                    break;
                } else {
                    if (j === short.length - 1) {
                        count++
                    }
                }
            }
        }
        return count
    }
    console.log(search('Mario Gold very cold', 'old'))

}
function isCurrentWindowValid(count, k) {
    let uniq_curr_char = 0;
    for (let i = 0; i < count.length; i++) {
        if (count[i] > 0) {
            uniq_curr_char++;

        }
    }
    return k >= uniq_curr_char
}

function findKthlargestSubString(str, k) {
    let u_c_count = 0//unique curr char
    let count = []//array contain freq of character
    //a-z(26) indexing if array is 0,1,2 ...

    for (let i = 0; i < 26; i++) {
        count.push(0);
    }
    // console.log('z'.charCodeAt(0))
    for (let i = 0; i < str.length; i++) {
        if (count[str[i].charCodeAt(0) - 'a'.charCodeAt(0)]) {
            u_c_count++;
        }
        count[str[i].charCodeAt(0) - 'a'.charCodeAt(0)]++;
    }
    if (k > u_c_count) {
        return "substring cannot formed"
    }

    //reset the count array =now we are counting window
    for (let i = 0; i < 26; i++) {
        count[i] = 0;
    }
    let start = 0;
    let end = 0
    let max_Window_Size = 1
    let max_Window_start = 0
    count[str[0].charCodeAt(0) - 'a'.charCodeAt(0)]++;

    for (let i = 1; i < str.length; i++) {
        count[str[i].charCodeAt(0) - 'a'.charCodeAt(0)]++;//tracking the charecter present in the current window
        end++//incresing the window size

        while (!isCurrentWindowValid(count, k)) {
            count[str[start].charCodeAt(0) - 'a'.charCodeAt(0)]--;
            start++;
        }
        if (end - start + 1 > max_Window_Size) {
            max_Window_Size = end - start + 1
            max_Window_start = start
        }
        return (max_Window_Size + " >> " + max_Window_start)
    }
}
// console.log(findKthlargestSubString("abcded",1))

{
    /**
 * Here we have to find the longest consecutive substring
 */
    //     word  ke repeatation handle nhi hua h
    //!   ########     not  perfactly working  some fixing needed    ################# 
    let str = "hellothere"
    // let str = "longesstSubtring"  // iske glt  ho rha h  jo  ss h uske vajah se
    let stIdxOfSub = 0
    let edInxOfSub = 0

    let ws = 0, we = 0

    let windowMap = {}

    while (we <= str.length - 1) {
        if (!windowMap[str[we]]) {
            windowMap[str[we]] = 1

            if (we - ws > edInxOfSub - stIdxOfSub) {
                edInxOfSub = we
                stIdxOfSub = ws
            }
            we++
        } else {
            while (str[ws] != str[we]) {
                delete windowMap[str[ws]]
                ws++
            }
            ws++
            we++
        }
    }

    let res = ""
    for (let i = stIdxOfSub; i <= edInxOfSub; i++) {
        res += str[i]
    }

    console.log(windowMap, stIdxOfSub, edInxOfSub, res)

}
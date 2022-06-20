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


{//Dynamic Window Size
    function findLongestSubStr(str) {
        let winStart = 0, winEnd = 0
        let strStart = 0, strEnd = 0
        let windowMap = {}, subStr = ''

        while (winEnd < str.length) {
            if (!windowMap[str[winEnd]]) { // If end & start string not matches will added to map
                windowMap[str[winEnd]] = 1

                if (winEnd - winStart > strEnd - strStart) { // update new sub string end & start
                    strStart = winStart
                    strEnd = winEnd
                }
                winEnd++
            } else {
                while (str[winEnd] != str[winStart]) { // if end == start then delete from map
                    delete windowMap[str[winStart]]
                    winStart++
                }
                winStart++
                winEnd++
            }
        }
        for (let chars = strStart; chars <= strEnd; chars++) {
            subStr += str[chars]
        }
        return [strStart, strEnd, subStr]
    }
    console.log(findLongestSubStr('hellothere'))
}
/**
 * Find the largest substring with distinct characters. 

   t h i s t h e i a r g e s t s u b 
	Ø Approach- Sliding Window
	Ø Take two pointer window start and end initialized with 0
	Ø One another variable to store max size window of unique chars
	Ø Take Hash map to store unique characters, initialize  as empty(Counting not necessary)
	Ø Run a loop to check whether char at start pointer and end pointer are unique or not till str.length-1
	Ø Store the unique chars in hash map with any value like 0 or 1
	Ø if unique char at end pointer (starts from 0) store the char in map and end++ , every time update the window size
	Ø If duplicate value comes then start++ until window becomes with all unique chars. 
    After unique do end++ and compare the window size with previous one is greater or not , if greater then update window size.
    Print the max window size
 */
{
    function findLargest(str) {
        let start = 0, end = 0, map = {}, maxWindow = 0, subWinStart, subWinEnd
        while (end < str.length) {
            if (!map[str[end]]) {
                map[str[end]] = 1
                end++
                if (maxWindow < end - start) {
                    maxWindow = end - start
                    subWinStart = start
                    subWinEnd = end-1
                }
            } else {
                delete map[str[start]]
                start++
            }
        }
        return [maxWindow, subWinStart, subWinEnd]
    }
    console.log(findLargest('helloworld'))
}
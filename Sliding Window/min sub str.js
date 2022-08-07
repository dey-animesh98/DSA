
 var minWindow = function (s, t) {
    // Need to do next
    let i = 0, j = 0, minWin = Infinity, res = ''
    let strMap = new Map(), currWinMap = new Map()

    for (let ele of t) {
        strMap.set(ele, strMap.get(ele) + 1 || 1)
    }

    let strLength = strMap.size
    while (j < s.length) {
        let expandChar = s[j]
        strMap.set(expandChar, strMap.get(expandChar)-1)
        if (strMap.get(expandChar) === 0) strLength--

        while (strLength === 0) {
            if (!res || res.length > j - i + 1) {
                res = s.slice(i, j + 1)
            }
            const compressChar = s[i];
            if (strMap.get(compressChar) === 0) {
                strLength++;
            }
            strMap.set(compressChar, strMap.get(compressChar)+1);
            i++;

        }

        j++;
    }

    return res;
  
};

let obj = {1:"a", 2:"b"}
let set = new Set([1,2,3])

console.log(obj.hasOwnProperty('1'))
console.log(set.has('1'))

{
    var minWindow = function (str, pattern) {
        // edge cases
        if (!str || pattern.length > str.length) return "";
        if (!pattern) return str;
      
        let minWindow = "";
      
        const frequencyMap = new Map();
      
        // build frequency map
        for (let char of pattern) {
          if (!frequencyMap.get(char)) frequencyMap.set(char, 0);
          frequencyMap.set(char, frequencyMap.get(char) + 1);
        }
      
        // keep track of chars matched
        let matched = 0;
      
        // slow pointer
        let left = 0;
      
        for (let right = 0; right < str.length; right++) {
          let char = str[right];
      
          if (frequencyMap.has(char)) {
            const newFrequency = frequencyMap.get(char) - 1;
      
            if (newFrequency === 0) matched++;
      
            frequencyMap.set(char, newFrequency);
      
            while (matched === frequencyMap.size) {
              const currentWindow = str.substring(left, right + 1);
      
              if (!minWindow) {
                // no result set yet, update with current
                minWindow = currentWindow;
              } else {
                minWindow =
                  // update window with the smallest one
                  minWindow.length > currentWindow.length ? currentWindow : minWindow;
              }
      
              // shrink window
              const previous = str[left];
              left++;
      
              // update frequency map if left char was included
              if (frequencyMap.has(previous)) {
                const freq = frequencyMap.get(previous);
      
                if (freq === 0) matched--;
      
                frequencyMap.set(previous, freq + 1);
              }
            }
          }
        }
      
        return minWindow;
      };
}

//🎆🎆🎆🎆🎆🎆🎆🎆🎆🔴🔴🔴🔴✔️✔️✔️✔️✔️✔️✔️✔️✔️✔️✔️
////////////Very very Important Question For interview////////////
{//Bad Practice
    function revSentence(sen) {
        let res = []
        let arr = sen.split(' ')
        for (let i = 0; i < arr.length; i++) {
            if (arr[i].length === 0) return "" //return arr[0] or if (arr[i].length == 0) arr[0]
            let x = arr[i].slice(1) + arr[i][0]
            res.push(x)
            res.concat(revSentence(sen.slice(1)))
        }
        return res.join(" ")
    }
    // console.log(revSentence('hi to all'))
}

{//Good Practice
    function revWord(str) {
        if (str.length == 0) return ""
        return revWord(str.slice(1)) + str[0]
    }

    function revSent(sen) {
        let senArr = sen.split(' ')
        for (let i = 0; i < senArr.length; i++) {
            senArr[i] = revWord(senArr[i])
        }
        return senArr.join(' ')
    }
    console.log(revSent('mera nam joker'))
}

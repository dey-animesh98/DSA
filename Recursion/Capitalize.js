// Capitalize first letter
{//With recursion
    function capitalizeR(arr) {
        let str = arr[0]
        if (arr.length == 0) return []                 //str = str[0].toUpperCase() + str.slice(1)
        str = str[0].toUpperCase() + str.slice(1)
        return [str].concat(capitalizeR(arr.slice(1)))
    }
    // console.log(capitalizeR(['holal', 'mola', 'chola', 'gola']))
}

{//With recursion
    function capitalize3(arr) {
        if (arr.length < 1) return  []
        arr[0] = arr[0][0].toUpperCase() + arr[0].slice(1)
        return [arr[0]].concat(capitalize3(arr.slice(1)))
    }
    // console.log(capitalize3(['hola', 'mola', 'chola', 'gola']))
}
{//With recursion
    function capitalize4(arr) {
        let temp = []
        if (arr.length < 1) return []
        temp.push(arr[0][0].toUpperCase() + arr[0].slice(1))
        // temp.push(s)
        return temp.concat(capitalize4(arr.slice(1)))
    }
    console.log(capitalize4(['hola', 'mola', 'cholai', 'loka']))
}

//-
{
    function capitalize2(arr, index = 0) {
        if (index < arr.length) {
            arr[index]   = arr[index][0].toUpperCase() + arr[index].slice(1)
            capitalize2(arr, index + 1)
        }
        return arr
    }
    let ar = ['hola', 'mola', 'chola', 'gola']
    // console.log(capitalize2(ar))
}

{// Without recursion
    function capitalize(arr) {
        let capArr = []
        for (let i = 0; i < arr.length; i++) {
            let str = arr[i]
            str = str[0].toUpperCase() + str.slice(1)
            capArr.push(str)
        }
        return capArr
    }
    // console.log(capitalize(['hola', 'mola', 'chola']))
}

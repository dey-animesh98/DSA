//Find the second most frequent ele 
function solution(a) {
    let map = {}
    let max = 0, Smax = 0, char = ''
    for (let ele of a) {
        map[ele] = map[ele]+1 || 1
        if (map[ele] > max) {
            max = map[ele]
            char = ele
        }
    }

    for (let i in map) {
        if (map[i] > Smax && map[i] < max) {
            Smax = map[i]
            char = i
        }
    }
    return char
}

console.log(solution("aab"))

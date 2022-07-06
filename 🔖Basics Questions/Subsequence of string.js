//Get all possible subsequence of string

// static void solve(int i, String s, String f) {
// 	if (i == s.length()) {
// 		System.out.print(f+" ");
// 		return;
// 	}
// 	//picking 
// 	//f = f + s.charAt(i);
// 	solve(i + 1, s,  f+s.charAt(i));
// 	//poping out while backtracking
// 	//f.pop_back();
// 	solve(i + 1, s,  f);
// }
// public static void main(String args[]) {
// 	String s = "abc";
// 	String f = "";
// 	System.out.println("All possible subsequences are: ");
// 	solve(0, s, f);
// }
// }

let res = []
function subSeq(idx, str, f){
    if (idx == str.length) {
        res.push(f)
        return 
    }
    subSeq(idx + 1, str, f + str.charAt(idx));
    subSeq(idx + 1, str, f);
    return res
}

// console.log(subSeq(0, "abc", ""))

//O(2^n) -- 
let reso = []
function subSeq(input, output) {
    if(input.length === 0){
      reso.push(output)
        return
    }
    // considering Element
    subSeq(input.substring(1), output +input[0])
    //not considering
    subSeq(input.substring(1),output)
    return reso
}

console.log(subSeq("abc",""))


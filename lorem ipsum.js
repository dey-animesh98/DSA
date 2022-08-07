var maxSubArray = function(nums) {
    if(nums.length == 0) return 0;
      let result = -Infinity;
      let sum = 0;
      for(let i = 0; i < nums.length; i++) {
          sum += nums[i];
          result = sum>result ? sum : result
          sum = sum < 0 ? 0 : sum;
      }
      return result;
  };

  {
    let s="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"


let ans=(s)=>{
let map=new Map()
let value

for(let i =0;i<s.length;i++){
    if((!map.has(s[i])) && /^[a-zA-Z]/.test(s[i]))map.set(s[i],1)
    else if((map.has(s[i])) && /^[a-zA-Z]/.test(s[i])){
    value=map.get(s[i])+1
     map.set(s[i],value)

}
    }
let map2=new Map()
let key1,value1
 let max,length=map.size
 for(let j=0;j<length;j++){
    max=0
for(let [key,value] of map){
    if(value>max){
        value1=value
        key1=key
        max=value
    }
    
}
map2.set(key1,value1)
map.delete(key1)
 }

    return map2
}



 let m=ans(s)
 console.log(m)
  }

 /**
Event Information
​Apache DevLake is inviting you to an Open Source huddle (04-August '22 / 7:30 PM)

In this session, Max Howell, Creator of Homebrew & Founder of Tea.xyz shares his experiences in Open source and you can take great learnings from his journey!

Register here: 👉 https://lu.ma/a86n488w

If you have any questions to be answered then, please join our Slack community and post it on #devlake-home channel. Invite Link: https://join.slack.com/t/devlake-io/shared_invite/zt-1d08eyheo-idGBCRk5Ycre4HJOKOengg
Or you can DM me!

Feel free to share it on socials :)

Regards
Prasurjya Pran Borah
JDE @Apache DevLake
 */
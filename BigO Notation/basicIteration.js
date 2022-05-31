const myArr =  ['1','2','3','4']
for(let i in myArr){
    console.log(i) // 0,1,2,3 (Returns index number)
}

for(let i of myArr){
    console.log(i) // 1,2,3,4 (Returns elements)
}
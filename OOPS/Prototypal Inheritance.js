//Prototype Inheritance
Function.prototype.newBind = function () {
    console.log("this is new bind")
}
function fun() {

}
fun.__proto__.newBind()

function fun2() {

}

fun2.newBind()

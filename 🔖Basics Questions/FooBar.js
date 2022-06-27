//take a number and if number is multiple of 3 print "Foo"
//take a number and if number is multiple of 5 print "Bar"
//take a number and if number is multiple of 3  & 5 print "FooBar"
// else print nothing

{
    function printer(number) {
        if (number % 3 === 0 && number % 5 === 0) {
            console.log(("FooBar"));
        } else if (number % 3 === 0) {
            console.log(("Foo"));
        } else if (number % 5 === 0) {
            console.log(("Bar"));
        }
    }
    printer(25)
}
class Stack {
    constructor(items = [], count = 0) {
        this.items = items
        this.count = count
    }

    push(element) {
        this.items[this.count] = element
        console.log(`${element} is added ${this.count}`)
        this.count++
        // return this.count-1
    }

    pop() {
        if (this.count === 0) {
            throw Error("Empty Stack")
        }
        let popEle = this.items[this.count - 1]
        this.count--
        console.log(`${popEle} is poped`)

    }

    peek(){
        console.log(`Top element is ${this.items[this.count-1]}`)
    }

    printStack() {
        console.log(`Stack items are ${this.items}`)
        console.log(this.items)
    }

    printLength() {
        console.log(`Stack length is ${this.count}`)
    }

    isEmpty() {
        console.log(this.count === 0 ? 'Stack is Empty' : 'Not Empty')
    }

    print(){
        let str = ''
        for(let i = 0; i < this.count; i++){
            str+= this.items[i] +','
        }
        console.log( str==='' ? "Stack is Empty" : 'Stack Eles ',str)
        // console.log(`Stack ele`, str)
        return  str==='' ? "Stack is Empty" : 'Stack Eles ',str
    }

    clear(){
        this.items = []
        this.count = 0
        console.log(`Stack cleared!!`)
    }


}

const st1 = new Stack()

st1.push(10)
st1.push(20)
st1.push(30)
// st1.peek()
// st1.isEmpty()
// st1.printStack()
// st1.printLength()
// st1.print() 
// console.log(st1.print())
// st1.pop()
// st1.pop()
// st1.printStack()
// st1.printLength()
// st1.print()

// st1.clear()
// st1.print()
// console.log(st1.print())
 






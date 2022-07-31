class Node {
    constructor(data) {
        this.data = data
        this.next = null
    }
}

class SLL {
    constructor() {
        this.head = null
        this.size = 0
    }

    addFront(data) {
        const newNode = new Node(data)
        if (!this.head) {
            this.head = newNode
        } else {
            let curr = this.head
            this.head = newNode
            newNode.next = curr
        }
        this.size++
    }

    removeFront() {
        if (!this.head) throw Error("Stack is Empty")
        let curr = this.head
        this.head = curr.next
        curr.next = null
        this.size--
    }
}

class Stack {
    constructor() {
        this.stack = new SLL()
    }


    push(ele) {
        return this.stack.addFront(ele)
    }

    pop() {
        return this.stack.removeFront()
    }

    printStack() {
        if (!this.stack.size) {
            console.log(`Nothing to print, No elements in stack`)
        }
        let curr = this.stack.head
        while (curr) {
            console.log(curr.data)
            curr = curr.next
        }
    }

    getSize() {
        console.log(`Stack size is ${this.stack.size}`)
    }

    peekEle(){
        console.log("Top ele is-> ",this.stack.head.data)
    }

}

let stack1 = new Stack()

stack1.push(2)
stack1.push(4)
stack1.push(6)
stack1.push(8)

stack1.peekEle()
stack1.getSize()
stack1.printStack()

stack1.pop()
stack1.getSize()
stack1.printStack()
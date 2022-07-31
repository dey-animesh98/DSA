const que = require('./Queue Practice')

class Stack{
    constructor(){
        this.size = 0
    }

    push(data){
        while (!que.queue1.isEmpty()) {
            que.queue2.enqueue(que.queue1.dequeue())
        }
        que.queue1.enqueue(data)

        while (!que.queue2.isEmpty()) {
            que.queue1.enqueue(que.queue2.dequeue())
        }
        this.size++
    }

    pop(){
        return que.queue1.dequeue()
    }

    isEmpty(){
        return this.size === 0
    }

    printStack(){
        let curr = que.queue1.printQueue()
    }
}

let qStack = new Stack()

qStack.push(5)
qStack.push(10)
qStack.push(15)
qStack.printStack()
// while (!qStack.isEmpty()) {
//     console.log(qStack.pop())
// }

// que.queue1.printQueue()
// que.queue2.printQueue()
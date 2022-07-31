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

    addEnd(data) {
        const newNode = new Node(data)

        if (!this.head) {
            this.head = newNode
        } else {
            let curr = this.head
            while (curr.next) {
                curr = curr.next
            }

            curr.next = newNode
        }
        this.size++
    }


    removeFront() {
        if (!this.head) throw Error('Queue is Empty')
        let curr = this.head
        this.head = curr.next
        curr.next = null
        this.size--
    }
}

class Queue {
    constructor() {
        this.queue = new SLL()
    }

    enqueue(data) {
        return this.queue.addEnd(data)
    }

    dequeue() {
        return this.queue.removeFront()
    }

    getSize() {
        console.log("Queue size is -> ", this.queue.size)
    }

    peekFront() {
        console.log(`Front ele is -> ${this.queue.head.data}`)
    }

    peekEnd() {
        let curr = this.queue.head
        while (curr.next) {
            curr = curr.next
        }
        console.log(`End ele is -> ${curr.data}`)
    }

    printQueue() {
        let curr = this.queue.head
        let que = []
        while (curr) {
            que.push(curr.data)
            curr = curr.next
        }

        return console.log(que.join(' -> '))

    }

    isEmpty() {
        return this.queue.size === 0
    }
}


// module.exports.Queue = Queue


const queue1 = new Queue()
const queue2 = new Queue()
module.exports = {queue1, queue2 }

// queue1.enqueue(1)
// queue1.enqueue(2)
// queue1.enqueue(3)

// queue1.getSize()
// queue1.peekFront()
// queue1.peekEnd()
// queue1.printQueue()

// console.log('----')
// queue1.dequeue()
// queue1.getSize()
// queue1.peekFront()
// queue1.peekEnd()
// queue1.printQueue()
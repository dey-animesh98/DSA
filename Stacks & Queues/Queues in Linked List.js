class Node {
    constructor(data) {
        this.data = data
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.head = null
        this.tail = null
        this.size = 0
    }

    appendEle(data) {
        const node = new Node(data)

        if (!this.head) {
            this.head = node
            this.tail = node

        } else {
            this.tail.next = node
            this.tail = node
        }
        this.size++
    }

    removeEle() {
        if (!this.size === 0) throw Error("Empty Stack")

        let curr = this.head
        this.head = curr.next

        curr.next = null
        this.size--
        return curr.data

    }
}

class Queue {

    constructor() {
        this.list = new LinkedList()
    }
    enQueue(data) { //Adding ele
        this.list.appendEle(data)
    }

    deQueue(){
       return this.list.removeEle()
    }

     getSize(){
        return this.list.size
    }

    frontEle(){
        return this.list.head.data
    }

    isEmpty(){
        return this.list.size === 0 ? "Stack Empty" : "Not empty"
    }
}

// const que = new Queue()

// que.enQueue(5)
// que.enQueue(6)
// que.enQueue(7)
// que.enQueue(8)
// console.log(que.isEmpty())
// console.log(que.frontEle())

// while (!que.isEmpty()) {
//     console.log(que.getSize(),">",que.deQueue())
    
// }

// console.log(que.getSize())



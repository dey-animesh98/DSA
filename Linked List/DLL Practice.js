class Node {
    constructor(data) {
        this.data = data
        this.next = null
        this.prev = null
    }
}

class DLL {
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
            curr.prev = newNode
            this.head = newNode
            newNode.next = curr
        }
        this.size++
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
            // console.log(curr.data)
            curr.next = newNode
            newNode.prev = curr
        }
        this.size++
    }

    addMid(data, k) {
        if (!this.head) throw TypeError('List is Empty')
        if (k > this.size || k <= 0) throw RangeError('Invalid Position')
        if (k === 1) return this.addFront(data)

        const newNode = new Node(data)

        let count = 1
        let curr = this.head

        while (count < k - 1) {
            curr = curr.next
            count++
        }
        newNode.next = curr.next
        curr.next.prev = newNode
        curr.next = newNode
        newNode.prev = curr

        this.size++
    }

    printList() {
        let curr = this.head
        let nodes = []
        while (curr) {
            // console.log(curr)
            nodes.push(curr.data)
            curr = curr.next
        }
        console.log(nodes.join(' <-> '))
    }
    
    isPalindrome() {
        let head = this.head
        while (head.next) {
            head = head.next
        }
        let tail = head
        head = this.head
        let count = 0
        while (Math.floor(this.size / 2) > count) {
            if (head.data === tail.data) {
                head = head.next
                tail = tail.prev
                count++
            } else {
                return console.log(`LL is not palindrome`)
            }
        }
        return console.log(`LL is palindrome`)
    }

    printSize() {
        console.log(`Size of DLL -> ${this.size}`)
    }

    printHead() {
        if (!this.head) return console.log(`Head Node is ${null}`)
        console.log(`Head Node -> ${this.head.data}`)
    }

    isEmpty() {
        console.log(`List is ${this.size === 0 ? 'Empty' : 'Not Empty'}`)
        return this.size === 0

    }

    printEle() {
        console.log("My Ele -> ", this.head.next.next.next.prev.prev.prev.data)
    }
}

const dll1 = new DLL()

const arr = [1,2,3,3,2,1]
// arr.forEach(ele => dll1.addFront(ele))
arr.forEach(ele => dll1.addEnd(ele))

// dll1.addMid(7, 2)
dll1.printList()
dll1.isEmpty()
dll1.printSize()
dll1.printHead()
dll1.isPalindrome()
// dll1.printEle()
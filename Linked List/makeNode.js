/*
{
    const node1 = {
        val: 100
    }
    const node2 = {
        val: 200
    }
    const node3 = {
        val: 300
    }
    const node4 = {
        val: 400
    }
    node1.next = node2
    node2.next = node3
    node3.next = node4

    // console.log(node1)
}

{

    //Classes
    class Node {
        constructor(data, next = null) {
            this.data = data
            this.next = next
        }
    }

    let node1 = new Node(10)
    let node2 = new Node(20)
    let node3 = new Node(30)

    node1.next = node2
    node2.next = node3

}
*/


/////
//node

class Node {
    //constructor

    constructor(element, next = null) {
        this.element = element
        this.next = next
    }
}


class LinkedList {

    constructor() {
        this.head = null;
        this.size = 0;
    }

    addEle(element) {//10

        // create a new node
        const node = new Node(element);
        // node = (20, null)
        // to store current node
        var current = null
        // if list is empty add the element and make it head
        if (this.head == null)
            this.head = node;
        else {
            current = this.head;
            // traverse till end of ll
            while (current.next != null) {
                current = current.next
            }

            current.next = node;
        }

        this.size++;
    }

    printList() {
        var curr = this.head
        while (curr) {
            console.log(curr.element)
            curr = curr.next
        }
    }

    size_of_list() {
        console.log(this.size)
    }

    isEmpty() {
        return this.size === 0;
    }


    removeElement(element) {
        var current = this.head;
        var prev = null;

        while (current != null) {
            //compare the element with node.element
            if (current.element === element) {
                if (prev == null) {
                    this.head = current.next
                    current.next = null
                } else {
                    prev.next = current.next
                }

                this.size--;
                return current.element
            }
            prev = current;
            current = current.next

        }
    }

    removedAt(k) {
        let curr = this.head
        let prev
        let it = 0
        if (k === 1) {
            this.head = curr.next
            curr.next = null
        } else {
            while (it < k) {
                it++
                prev = curr
                curr = curr.next
            }
            prev.next = curr.next
            curr.next = null

        }
        this.size--

    }

    reverseList() {
        let curr = this.head
        let prev = null

        while (curr) {
            let temp = curr.next
            curr.next = prev
            prev = curr
            curr = temp
        }
        this.head = prev
        return prev
    }

    reverseRecursion(head) {
        if (head === null || head === null) {
            return head
        }

        let newHead = this.reverseRecursion(head.next)
        head.next.next = head
        head.next = null
        return newHead
    }

    reverseK(head, k) {
        if (head == null) {
            return null
        }

        let curr = head
        let temp = null
        let prev = null
        let count = 0

        while (count < k && curr != null) {
            temp = curr.next
            curr.next = prev
            prev = curr
            curr = temp
            count++
        }

        if (temp != null) {
            head.next = reverseK(temp, k)
        }
        return prev
    }


    //Reverse Alternative K{

    // }


    detectLoopH(head) {
        let set = new Set()
        while (head !== null) {
            if (s.has(head)) {
                return true
            }
            set.add(head)
            head = head.next
        }
        return false
    }

    detectLoopPointer(head) {
        let slow = head
        let fast = head
        while (fast & fast.next) {
            slow = slow.next
            fast = fast.next.next
            if (slow === fast) return true
        }
        return false
    }

}


var l1 = new LinkedList();

l1.addEle(10)
l1.addEle(20)
l1.addEle(30)
l1.addEle(40)

l1.printList()

console.log(">>>");

// l1.head = l1.reverseRecursion(l1.head)

// l1.reverseList()
l1.printList()

// console.log(">>>");

// l1.reverseRecursion()
// l1.printList()


// l1.size_of_list()

// console.log(l1.isEmpty())

// l1.removeElement(20)

// l1.printList()

// l1.size_of_list()

//Revserse a linked in  given

//with out reverse print the reversed linkedlist

//
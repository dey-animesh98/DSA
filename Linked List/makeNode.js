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

}


var l1 = new LinkedList();

l1.addEle(10)

l1.addEle(20)

l1.addEle(30)

l1.printList()

l1.size_of_list()

console.log(l1.isEmpty())

l1.removeElement(20)

l1.printList()

l1.size_of_list()

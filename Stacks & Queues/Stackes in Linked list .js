
  //Stacks using linked List

class Node{
    constructor(data){
        this.data = data
        this.next = null
    }
}

class LinkedList{
    constructor(head=null, size = 0, tail = null){
        this.head = head
        this.tail = tail
        this.size = size
    }

    pushData(){
        const node = new Node(data)

        if (!this.head) {
            this.head = node
            this.tail = node
        }else{
            node.next = this.head
            this.head = node
        }

        if (this.size === 0) {
            this.tail = node
        }

        this.size++
    }

    popData(){
        if(this.size === 0) throw Error("Empty Stack")
        let curr = this.head
        this.head = this.head.next
        this.size--
        curr.next = null
        return curr.data

    }

}

class Stack{
    constructor(){
        this.list = new LinkedList()
    }


    push(val){
         this.list.pushData(val)
    }

    pop(){
        return this.list.popData()
    }

    peek(){
        return this.list.head
    }

    getSize(){
       return this.list.size
    }

    isEmpty(){
        return this.list.size === 0
    }
    printList(){


    }

}

const st1 = new Stack()

st1.push(2)
st1.push(5)
st1.push(7)
st1.push(7)

while (!st1.isEmpty()) {
    console.log(st1.getSize ,">" , st1.pop())
}

console.log(st1.getSize)

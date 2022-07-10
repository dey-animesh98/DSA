
class Node{
    constructor(data, next = null){
        this.data = data
        this.next = next
    }
}

class LinkedList{
    constructor(){
        this.head =null
        this.tail = null
        this.size = 0
    } 

    pushBack(data){
        const node = new Node(data)
       if (!this.head){
            this.head = node
            // this.tail = node
        }else{
             
        }
    }
}
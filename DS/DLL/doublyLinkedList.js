class Node {
    constructor(value) {
        this.value = value
        this.next = null
        this.prev = null
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null
        this.tail = null
        this.length = 0
    }

    push(v) {
        let node = new Node(v)
        if (!this.head) {
            this.head = node
            this.tail = node
        } else {
            this.tail.next = node
            node.prev = this.tail
            this.tail = node
        }
        this.length = this.length + 1
        return this
    }
    pop() {
        if(!this.head) return undefined
        let node = this.tail
        if(this.length === 1) {
            this.head = null
            this.tail = null
        } else {
            this.tail = this.tail.prev
            this.tail.next = null
            node.prev = null
        }
        this.length = this.length - 1
        return node
    }
    unshift(v) {
        let node = new Node(v)
        if (!this.head) {
            this.head = node
            this.tail = node
        } else {
            node.next = this.head
            this.head.prev = node
            this.head = node
        }
        this.length = this.length + 1
        return this
    }
    shift() {
        if (!this.head) return undefined
        let node = this.head
        if (this.length === 1) {
            this.head = null
            this.tail = null
        } else {
            this.head = this.head.next
            this.head.prev = null
            node.next = null
        }
        this.length = this.length -1
        return node
    }
    get(index) {
        if (index < 0 || index >= this.length) return undefined
        if (index === 0) return this.head
        if (index === this.length-1) return this.tail
        let node = this.head
        for (let counter = 0; counter < index; counter++) {
            node = node.next
        }
        return node
    }
    set(index, v) {
        let node = this.get(index)
        if(!node) return false
        node.value = v
        return true
    }
    remove(index) {
        if (index < 0 || index >= this.length) return undefined
        if (index === 0) return this.shift()
        if (index === this.length) return this.pop()
        let node = this.get(index)
        let prevNode = this.get(index-1)
        let nextNode = this.get(index+1)
        prevNode.next = nextNode
        nextNode.prev = prevNode
        node.next = null
        node.prev = null
        this.length = this.length - 1
        return node
    }
    insert(index, v) {
        if (index < 0 || index >= this.length) return undefined
        if (index === 0) return !!this.unshift(v)
        if (index === this.length-1) return !!this.push(v)
        let node = new Node(v)
        let indexedNode = this.get(index)
        node.next = indexedNode
        node.prev = indexedNode.prev
        node.prev.next = node
        indexedNode.prev = node
        this.length = this.length + 1
        return true
    }
    reverse(){
        let temp = null;
        let current = this.head;
 
        /*
         * swap next and prev for all nodes of doubly linked list
         */
        while (current !== null) {
            temp = current.prev;
            current.prev = current.next;
            current.next = temp;
            current = current.prev;
        }
 
        /*
         * Before changing head, check for the cases like empty list and list with only
         * one node
         */
        if (temp !== null) {
            this.head = temp.prev;
        }    
        return this
    }
}

let list = new DoublyLinkedList()
list.push(1)
list.push(2)
list.push(3)
list.push(4)
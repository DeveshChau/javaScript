class Node {
    constructor(val) {
        this.val = val
        this.next = null
    }
}
class SinglyLinkedList {
    constructor() {
        this.head = null
        this.tail = null
        this.length = 0
    }

    push(val) {
        let node = new Node(val);
        if (!this.head) {
            this.head = node
            this.tail = node
        } else {
            this.tail.next = node
            this.tail = node
        }
        this.length = this.length+1
        return this
    }

    pop() {
        if (!this.head) return undefined 
        let current = this.head
        let newTail = current
        while(current.next) {
            newTail = current
            current = current.next
        }
        this.tail = newTail
        this.tail.next = null
        this.length--
        if (this.length == 0) {
            this.head = null
            this.tail = null
        }
        return current
    }

    unshift(val) {
        let node = new Node(val)
        if (this.length) {
            node.next = this.head
            this.head = node
        } else {
            this.head = node
            this.tail = node
        }
        this.length = this.length+1
        return this
    }
    shift() {
        let node;
        if (this.length == 0) return undefined
        if (this.length == 1) {
            node = this.head
            this.head = null
            this.tail = null
        } else {
            node = this.head
            this.head = this.head.next
        }
        this.length = this.length - 1
        return node
    }
    get(position) {
        if (position < 0 || position >= this.length) return undefined
        let cnt = 0
        let node = this.head
        while(cnt < position) {
            node = node.next
            cnt++
        }
        return node
    }
    set(position, value) {
        let node = this.get(position)
        if(!node) return false
        node.val = value
        return true
    }
    insert(position, value) {
        if (position < 0 || position > this.length) return false
        if (position === 0) return !!this.unshift(value)
        if (position === this.length) return !!this.push(value)
        let node = this.get(position - 1)
        let newNode = new Node(value)
        newNode.next = node.next
        node.next = newNode
        this.length = this.length + 1
        return true
    }
    remove(position) {
        if (position < 0 || position > this.length) return false
        if (position === 0) return !!this.shift()
        if (position === this.length - 1 ) return !!this.pop()
        let node = this.get(position - 1)
        let removedNode = node.next
        node.next = removedNode.next
        this.length = this.length - 1
        return removedNode
    }
    reverse() {
        let node = this.head
        this.head = this.tail
        this.tail = node
        let next
        let prev = null
        for (let i=0; i<this.length; i++) {
            next = node.next
            node.next = prev
            prev = node
            node = next
        }
        return this
    }
}

let list = new SinglyLinkedList()
list.push("Hi")
list.push("there")
list.push("good")
list.push("Morning")
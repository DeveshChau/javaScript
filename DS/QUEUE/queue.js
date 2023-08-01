class Node {
    constructor(val) {
        this.val = val
        this.next = null
    }
}
class Queue {
    constructor() {
        this.size = 0
        this.first = null
        this.last = null
    }
    enqueue(v) {
        let node = new Node(v)
        if(!this.first) {
            this.first = node
            this.last = node
        } else {
            this.last.next = node
            this.last = node
        }
        this.size = this.size + 1
    }
    dequeue() {
        if (!this.first) return undefined
        let node = this.first
        if (this.first == this.last) {
            this.last = null
        }
        this.first = this.first.next
        node.next = null
        this.size = this.size-1
        return node
    }
}
let q = new Queue()
q.enqueue(1)
q.enqueue(2)
q.enqueue(3)
q.enqueue(4)
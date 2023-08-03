class Node {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null
    }
    insert(v) {
        let newNode = new Node(v)
        if(!this.root) {
            this.root = newNode
            return this
        }
        let tempRoot = this.root
        while(true) {
            if(tempRoot.value == newNode.value) return undefined
            if(tempRoot.value < newNode.value) {
                if(!tempRoot.right) {
                    tempRoot.right = newNode
                    return this
                } else {
                    tempRoot = tempRoot.right
                }
            } else if(tempRoot.value > newNode.value){
                if(!tempRoot.left) {
                    tempRoot.left = newNode
                    return this
                } else {
                    tempRoot = tempRoot.left
                }
            }
        }
    }
    BF() {
        if(!this.root) return null
        let queue = []
        let visited = []
        queue.push(this.root)
        while(queue.length) {
            let node = queue.shift()
            visited.push(node.value)
            if(node.left) queue.push(node.left)
            if(node.right) queue.push(node.right)
        }
        return visited
    }
    DFPreOrder() {
        if(!this.root) return null
        let visited = []
        function traverse(node) {
            visited.push(node.value)
            if(node.left) traverse(node.left)
            if(node.right) traverse(node.right)
        }
        traverse(this.root)
        return visited 
    }
    DFPostOrder() {
        if(!this.root) return null
        let visited = []
        function traverse(node) {
            if(node.left) traverse(node.left)
            if(node.right) traverse(node.right)
            visited.push(node.value)
        }
        traverse(this.root)
        return visited 
    }
    DFInOrder() {
        if(!this.root) return null
        let visited = []
        function traverse(node) {
            if(node.left) traverse(node.left)
            visited.push(node.value)
            if(node.right) traverse(node.right)
        }
        traverse(this.root)
        return visited 
    }
}

let bst = new BinarySearchTree()
bst.insert(10)
bst.insert(15)
bst.insert(13)
bst.insert(20)
bst.insert(7)
bst.insert(9)
bst.insert(5)
console.log("Breadth first", bst.BF())
console.log("Depth first pre order", bst.DFPreOrder())
console.log("Depth first post order", bst.DFPostOrder())
console.log("Depth first in order", bst.DFInOrder())
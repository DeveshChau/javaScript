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
    find(v) {
        if(!this.root) return false
        let tempRoot = this.root
        while(true) {
            if(tempRoot.value == v) return true
            if(tempRoot.value < v) {
                if(!tempRoot.right) return false
                tempRoot = tempRoot.right
            } else if(tempRoot.value > v){
                if(!tempRoot.left) return false
                tempRoot = tempRoot.left
            }
        }
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
console.log(bst.find(10))
console.log(bst.find(12))
console.log(bst.find(20))
console.log(bst.find(32))
console.log(bst.find(5))
console.log(bst.find(0))
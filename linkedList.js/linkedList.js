// create a class for listNode

class listNode {
  constructor(data, next = null) {
    this.data = data
    this.next = next
  }
}

class linkedList {
  constructor() {
    this.head = null
  }

  addFirst(data) {
    //add at head position everytime you add new element
    this.head = new listNode(data, this.head)
  }

  addLast(data) {
    //add at the end of LinkedList everytime an element is inserted

    //to check if our ll is empty?
    if (this.head === null) {
      this.head = new listNode(data, this.head)
    }

    //otherwise traverse in the ll till the last node.
    let currentNode = this.head

    while (currentNode.next) {
      currentNode = currentNode.next
    }

    currentNode.next = new listNode(data)
  }

  addAt(data, position) {
    //to add node at specific position

    if (position === 0 || this.head === null) {
      this.addFirst(data)
      return
    }

    const newNode = new listNode(data)
    let currentNode = this.head
    let prevNode = null
    let idxCount = 0

    while (idxCount < position && currentNode.next) {
      prevNode = currentNode
      currentNode = currentNode.next
      idxCount += 1
    }

    newNode.next = currentNode

    if (prevNode) {
      prevNode.next = newNode
    } else {
      this.head = newNode
    }
  }

  removeFirst() {
    this.head = this.head.next
  }

  removeLast() {
    if (!this.head) return

    let currentNode = this.head

    while (currentNode.next.next) {
      currentNode = currentNode.next
    }

    currentNode.next = null
  }

  removeAt(position) {
    if (!this.head) return

    let currentNode = this.head
    let prevNode = null
    let pos = 0

    while (currentNode.next && pos !== position) {
      prevNode = currentNode
      currentNode.next = currentNode
      pos += 1
    }

    if (!currentNode) return

    prevNode.next = currentNode.next
  }

  removeElement(data) {
    if (!this.head) return

    if (this.head.data === data) {
      this.head = this.head.next
      return
    }

    let currentNode = this.head
    let prevNode = null

    while (currentNode && currentNode.data !== data) {
      prevNode = currentNode
      currentNode = currentNode.next
    }

    if (!currentNode) return

    prevNode.next = currentNode.next
  }

  size() {
    if (!this.head) return

    let currentNode = this.head
    let count = 1

    while (currentNode.next) {
      count += 1
      currentNode = currentNode.next
    }

    return count
  }

  clear() {
    this.head = null
  }

  getFirst() {
    return this.head.data
  }

  getLast() {
    if (!this.head) return

    let currentNode = this.head

    while (currentNode.next) {
      currentNode = currentNode.next
    }

    return currentNode.data
  }

  display() {
    let currentNode = this.head
    while (currentNode.next) {
      console.log(currentNode.data, '->')
      currentNode = currentNode.next
    }
  }
}

const myLL = new linkedList()

myLL.addFirst(1)
myLL.addFirst(2)
myLL.display()
myLL.clear()
myLL.addFirst(3)
myLL.addFirst(4)
myLL.display()
console.log(myLL.getFirst())
console.log(myLL.getLast())
console.log(myLL.size())

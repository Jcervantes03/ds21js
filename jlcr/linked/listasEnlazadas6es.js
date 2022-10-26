class Node {
  constructor(data) {
    this.data = data;
    this.next = null
  }
}

class LinkedList {
  constructor() {
    this.head = null
    this.currentSize = 0
  }

  append(data) {
    const node = new Node(data)

    if (this.head === null) {
      this.head = node
    } else {
      let actual = this.head
      while (actual.next) {
        actual = actual.next
      }
      actual.next = node
    }

    this.currentSize++
  }

  print() {
    if (this.head === null) {
      return null
    }

    let actual = this.head
    while (actual) {
      console.log(actual.data)
      actual = actual.next
    }

  }
  insertAfter(search, node) {
    const nodo = new Node(node)
    let actual = this.head
    if (this.head === null) {
        return null
    }

    while (actual) {
        if (actual.data == search) {
            nodo.next = actual.next;
            actual.next = nodo;
            actual = actual.next
            this.actualSize++
            return true
        }
        actual = actual.next

    }
    return false
}

insertBefore(search, node) {
    let nodo = new Node(node)
    let current = this.head
    let prev = null
    if (this.head === null) {
        return null
    }
    else if (this.head.data === search) {
        nodo.next = this.head
        this.head = nodo
        this.currentSize++
        return true
    }
    else{
        while (current.data != search) {
            prev = current
            current = current.next
        }
        if(current.data == search){
            prev.next = nodo
            nodo.next = current
            this.currentSize++
            return true
        }
    }
    return false
}

}

export {LinkedList}
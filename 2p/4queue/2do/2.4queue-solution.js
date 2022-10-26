class Queues {

  constructor() {
    this.queue = []
    this.top = 5
  }
  enqueue(e) {
    if (this.isFull())
      return 'full queue'
    else {
      this.queue.push(e)
      return e + ' se agregó a la cola'
    }

  }
  dequeue() {
    if (this.isEmpty())
      return 'empty stack'
    else
      return this.queue.shift(), 'se quito de la cola '
  }

  size() {
    return this.queue.length
  }

  print() {
    console.log(this.queue)
  }

  isEmpty() {
    return this.queue.length === 0
  }
  isFull() {
    if (this.queue.length === this.top)
      return true
    else
      return false
  }

}

let cola = new Queues()

console.log(cola.isEmpty());
console.log(cola.enqueue(1));
console.log(cola.enqueue(5));
console.log(cola.enqueue(8));
console.log(cola.enqueue(7));
console.log(cola.enqueue(6));
console.log(cola.enqueue(3));
cola.print();
console.log(cola.size());
console.log(cola.dequeue());
console.log(cola.dequeue());
console.log(cola.dequeue());
cola.print();
console.log(cola.dequeue());
console.log(cola.dequeue());
console.log(cola.dequeue());
console.log(cola.isEmpty());
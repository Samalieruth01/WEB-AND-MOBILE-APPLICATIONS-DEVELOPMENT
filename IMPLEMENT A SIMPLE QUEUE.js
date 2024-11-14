class Queue {
    constructor() {
        this.items = [];
    }

    enqueue(element) {
        this.items.push(element);
    }

    dequeue() {
        if (this.isEmpty()) return "Queue is empty";
        return this.items.shift();
    }

    isEmpty() {
        return this.items.length === 0;
    }

    front() {
        if (this.isEmpty()) return "Queue is empty";
        return this.items[0];
    }

    printQueue() {
        return this.items.join(" ");
    }
}

let queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log(queue.printQueue()); // Output: 1 2 3
console.log(queue.dequeue()); // Output: 1
console.log(queue.front()); // Output: 2

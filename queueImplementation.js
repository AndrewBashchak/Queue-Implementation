class Queue {
    constructor() {
        this.items = [];
    };

    push(element) {
        this.items.push(element);
    };

    delFirst() {
        if (this.isEmpty()) return null;
        return this.items.shift();
    };

    count() {
        return this.items.length;
    };

    toString() {
        return this.items.join(', ');
    };

    isEmpty() {
        return this.items.length === 0;
    };
};

const queue = new Queue();

queue.push(5);
queue.push(14);
queue.push(88);
queue.push(42);

console.log(queue.count());
console.log(queue.delFirst());
console.log(queue.toString());

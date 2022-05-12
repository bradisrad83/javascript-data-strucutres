class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val) {
        let newNode = new Node(val);
        if(!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
    pop() {
        if(!this.head) return undefined;
        let oldTail = this.tail;
        if(this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = oldTail.prev;
            this.tail.next = null;
            oldTail.prev = null;
        }
        this.oldTaillength--;
        return oldTail;
    }
    shift() {
        if(!this.head) return undefined;
        let oldHead = this.head;
        if(this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = oldHead.next;
            this.head.prev = null;
            oldHead.next = null;
        }
        this.length--;
        return oldHead;
    }    
    unshift(val) {
        let newNode = new Node(val);
        if(!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }
    get(index) {
        if(index < 0 || index >= this.length) return undefined;
        let middle = floor(this.length / 2);
        if(index >= middle) {
            let node = this.tail;
            let count = this.length - 1;
            while(count !== index) {
                node = node.prev;
                count--;
            }
        } else {
            let node = this.head;
            let count = 0;
            while(count !== index) {
                node = node.next;
                count++;
            }
        }
        return node;
    }
    set(index, val) {
        let node = this.get(index);
        if(node) {
            node.val = val;
            return true;
        }
        return false;
    }
    insert(index, val) {
        if(index < 0 || index >= this.length) return false;
        if(index === 0) {
            this.unshift(val);
            return true;
        }
        if(index === this.length){
            this.push(val);
            return true;
        } 
        let newNode = new Node(val);
        let node = this.get(index - 1);
        let next = node.next;
        node.next = newNode;
        newNode.prev = node;
        newNode.next = next;
        next.prev = newNode;
        this.length++;
        return true;
    }
    remove(index) {
        if(index < 0 || index >= this.length) return undefined;
        if(index === 0 ) return this.shift();
        if(index === this.length - 1) return this.pop();
        let node = this.get(index);
        let prev = node.prev;
        let next = node.next;
        prev.next = next;
        next.prev = prev;
        node.next = null;
        node.prev = null;
        this.length--;
        return node;
    }
    reverse() {     
        let temp = null;
        let current = this.head;
        while (current != null) {
            temp = current.prev;
            current.prev = current.next;
            current.next = temp;
            current = current.prev;
        }
        if (temp != null) {
            this.head = temp.prev;
        }
        return this;
    }
}


class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
       this.head = null;
       this.tail = null;
       this.length = 0; 
    }
    push(val) {
        let newNode = new Node(val);
        if(!head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
    pop() {
        if(!this.head) return undefined;
        let current = this.head;
        let previous = current;
        while(current.next) {
            previous = current;
            current = current.next;
        }
        this.tail = previous;
        this.tail.next = null;
        this.length--;
        if(this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return this.current;
    }
    shift() {
        if(!this.head) return undefined;
        let head = this.head;
        this.head = head.next;
        this.length--;
        if(this.length === 0) {
            this.tail = null;
        }        
        return head;
    }
    unshift(val) {
        let newNode = new Node(val);
        if(!this.head) {
            this.head = newNode;
            this.tail = newNode;
            this.length++;
            return this;
        }
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return this;
    }
    get(index) {
        if(index < 0 || index >= this.length) return undefined;
        let node = this.head;
        let counter = 0;
        while(counter != index) {
            node = node.next;
            counter++;
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
        let newNode = new Node(val);
        if(index === 0) {
            this.unshift(newNode);
            return true;
        }
        if(index === this.length){
            this.push(newNode);
            return true;
        } 
        let node = this.get(index - 1);
        let temp = node.next;
        newNode.next = temp;
        node.next = newNode;
        this.length++;
        return true;
    }
    remove(index) {
        if(index < 0 || index >= this.length) return undefined;
        if(index === this.length - 1) return this.pop();
        if(index === 0 ) return this.shift();
        let node = this.get(index - 1);
        let deletedNode = node.next;
        node.next = deletedNode.next;
        length--;
        return deletedNode;
    }
    /**
     *not really sure if this would be in a standard class however since it'll come up on many interviews     
     *so I decided to add it
     */
    reverse() {
        let node = this.head;
        this.head = this.tail;
        this.tail = node;
        let prev = null;
        let next = null;
        for(let i = 0; i < this.length; i++) {
            next = node.next;
            node.next = prev;
            prev = node;
            node = next;
        }
        return this;
    }
}
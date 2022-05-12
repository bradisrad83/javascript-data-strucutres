class Node {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class Stack{
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0; 
    }
    push(val) {
        let newNode = val;
        if(!this.first) {
            this.first = newNode;
            this.last = newNode;
        } else {
            let first = this.first;
            this.first = newNode;
            newNode.next = first;
        }
        this.size++;
        return this;
    }
    pop() {
        if(!this.first) return null;
        let temp = this.first
        if(this.first === this.last) {
            this.last = null;
        }
        this.first = this.first.next;
        this.size--;
        return temp.value;
    }
}
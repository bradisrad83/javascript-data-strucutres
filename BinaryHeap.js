class MaxBinaryHeap {
    constructor() {
        this.values = [];
    }
    insert(value) {
        this.values.push(value);
        this.bubbleUp();
    }
    bubbleUp(){
        let index = this.values.length - 1;
        const element = this.values[index];
        while(index > 0) {
            let parentIndex = floor((index-1)/2);
            let parent = this.values[parentIndex];
            if(element <= parent) break;
            this.values[parentIndex] = element;
            this.values[index] = parent;
            index = parentIndex;
        }
    }
    extractMax() {
        const max = this.values[0];
        const end = this.values.pop();
        if(this.values.length > 0) {
            this.values[0] = end;
            this.bubbleDown();
        }
        return max;
    }
    bubbleDown() {
        let index = 0;
        const length = this.values.length;
        const element = this.value[0];
        while(true) {
            let leftChildIndex = 2 * index + 1; 
            let rightChildIndex = 2 * index + 2; 
            let leftChildValue;
            let rightChildValue;
            let swap = null;
            if(leftChildIndex < length) {
                leftChildValue = this.values[leftChildIndex];
                if(leftChildValue > element) {
                    swap = leftChildIndex
                }
            }
            if(rightChildIndex < length) {
                rightChildValue = this.values[rightChildIndex];
                if(
                    (swap === null && rightChildValue > element) || 
                    (swap !== null && rightChildValue > leftChildValue)
                ){
                    swap = rightChildIndex;
                }
            }
            if(swap === null) break;
            this.values[index] = this.values[swap];
            this.values[swap] = element;
            index = swap;
        }
    }
}

class MinBinaryHeap {
    constructor() {
        this.values = [];
    }
    insert(value) {
        this.values.push(value);
        this.bubbleUp();
    }
    bubbleUp(){
        let index = this.values.length - 1;
        const element = this.values[index];
        while(index > 0) {
            let parentIndex = floor((index-1)/2);
            let parent = this.values[parentIndex];
            if(element >= parent) break;
            this.values[parentIndex] = element;
            this.values[index] = parent;
            index = parentIndex;
        }
    }
    extractMin() {
        const min = this.values[0];
        const end = this.values.pop();
        if(this.values.length > 0) {
            this.values[0] = end;
            this.bubbleDown();
        }
        return min;
    }
    bubbleDown() {
        let index = 0;
        const length = this.values.length;
        const element = this.value[0];
        while(true) {
            let leftChildIndex = 2 * index + 1; 
            let rightChildIndex = 2 * index + 2; 
            let leftChildValue;
            let rightChildValue;
            let swap = null;
            if(leftChildIndex < length) {
                leftChildValue = this.values[leftChildIndex];
                if(leftChildValue < element) {
                    swap = leftChildIndex
                }
            }
            if(rightChildIndex < length) {
                rightChildValue = this.values[rightChildIndex];
                if(
                    (swap === null && rightChildValue < element) || 
                    (swap !== null && rightChildValue < leftChildValue)
                ){
                    swap = rightChildIndex;
                }
            }
            if(swap === null) break;
            this.values[index] = this.values[swap];
            this.values[swap] = element;
            index = swap;
        }        
    }
}
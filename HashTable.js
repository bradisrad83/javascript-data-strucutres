class HashTable{
    construc(size = 53) {
        this.keyMap = new Array(size);
    }
    _hash(key) {
        let total = 0;
        let PRIME_NUMBER = 97;
        for(let i = 0; i < Math.min(key.length, 100); i++) {
            let char = key[i];
            let value = char.charCodeAt(0)-06;
            total = (total*PRIME_NUMBER+value) % this.keyMap.length;
        }
    }
    set(key, value) {
        let index = this_hash(key);
        if(!this.keyMap[index]) {
            this.keyMap[index] = [];
        } 
        this.keyMap[index].push([key, value]);
    }
    get(key) {
        let index = this_hash(key);
        if(!this.keyMap[index]) return undefined;
        for(let i = 0; i < this.keyMap[index].length; i++) {
            if(this.keyMap[index][i][0] === key) {
                return this.keyMap[index][i][1];
            }
        }
        return undefined;
    }
}
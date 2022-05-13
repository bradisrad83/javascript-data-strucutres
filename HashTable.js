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
    keys() {
        let keys = [];
        for(let i = 0; i < this.keyMap.length; i++) {
            if(this.keyMap[i]) {
                for(let k = 0; k < this.keyMap[i].length; k++) {
                    if(!keys.includes(this.keyMap[i][k][0])) {
                        keys.push(this.keyMap[i][k][0]);
                    }
                }
            }
        }
        return keys;
    }
    values() {
        let values = [];
        for(let i = 0; i < this.keyMap.length; i++) {
            if(this.keyMap[i]) {
                for(let k = 0; k < this.keyMap[i].length; k++) {
                    if(!values.includes(this.keyMap[i][k][1])) {
                        values.push(this.keyMap[i][k][1]);
                    }
                } 
            }
        }
        return values;
    }
}
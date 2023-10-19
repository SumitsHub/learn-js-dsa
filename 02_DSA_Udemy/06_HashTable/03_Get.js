class HashTable {
  constructor(size = 7) {
    this.dataMap = new Array(size);
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * 23) % this.dataMap.length;
    }
    return hash;
  }

  set(key, value) {
    let index = this._hash(key);
    if (!this.dataMap[index]) {
      this.dataMap[index] = [];
    }
    this.dataMap[index].push([key, value]);
  }

  /** get value from the hast table for specific key */
  get(key) {
    // get index for key using hash method -> remember -> hash generates same for index for same key
    let index = this._hash(key);
    // if dataMap has something on the that index
    if (this.dataMap[index]) {
      // find array stored at index with input key
      let temp = this.dataMap[index].find(arr => arr[0] === key);
      if (temp) return temp[1];
    }
    return undefined;
  }
}

let ht = new HashTable();

ht.set('lumber', 70);
ht.set('washers', 50);
ht.set('bolts', 1400);

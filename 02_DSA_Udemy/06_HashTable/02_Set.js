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

  /** set key and value into the hash table */
  set(key, value) {
    // generate index by using internal hash method
    let index = this._hash(key);

    // if no value present at generated index -> initialize with empty array
    if (!this.dataMap[index]) {
      this.dataMap[index] = [];
    }

    // push key value array to dataMap
    this.dataMap[index].push([key, value]);
  }
}

let ht = new HashTable();

ht.set('lumber', 70);
ht.set('washers', 50);
ht.set('bolts', 1400);

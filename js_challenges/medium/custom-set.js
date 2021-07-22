class CustomSet {
  constructor(arr) {
    this.elements = arr || [];
    let doubles = false;
    for (let idx = 0; idx < this.elements.length - 1; idx++) {
      doubles = false;
      if (this.elements.slice(idx + 1).includes(this.elements[idx])) {
        doubles = true;
        this.elements.shift();
      }
    }
  }

  size() {
    return this.elements.length;
  }

  isEmpty() {
    return this.size() === 0;
  }

  contains(element) {
    return this.elements.includes(element);
  }

  isSubset(otherSet) {
    return this.elements.every(element => otherSet.contains(element));
  }

  isDisjoint(otherSet) {
    return !this.elements.some(element => otherSet.contains(element));
  }

  isSame(otherSet) {
    // return this.isSubset(otherSet) && this.size() === otherSet.size();
    return this.isSubset(otherSet) && otherSet.isSubset(this);
  }

  add(elem) {
    if (!this.contains(elem)) {
      this.elements.push(elem);
    }
    return this;
  }

  intersection(otherSet) {
    let interSet = new CustomSet();
    this.elements.forEach(elem => {
      if (otherSet.contains(elem)) {
        interSet.add(elem);
      }
    });
    return interSet;
  }

  difference(otherSet) {
    let diffSet = new CustomSet();
    this.elements.forEach(elem => {
      if (!otherSet.contains(elem)) {
        diffSet.add(elem);
      }
    });
    return diffSet;
  }

  union(otherSet) {
    let unionSet = Object.create(this);
    otherSet.elements.forEach(elem => {
      unionSet.add(elem);
    });
    return unionSet;
  }
}

module.exports = CustomSet;

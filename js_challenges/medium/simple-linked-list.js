class SimpleLinkedList {
  constructor() {
    this.elements = [];
  }

  size() {
    return this.elements.length;
  }

  isEmpty() {
    return this.size() === 0;
  }

  _setHeadNextElement(nextElement) {
    this.head()._setNextElement(nextElement);
  }

  peek() {
    if (this.isEmpty()) return null;
    return this.head().datum();
  }

  head() {
    return this.elements[0];
  }

  push(datum) {
    let element = new Element(datum);
    this.elements.unshift(element);
    if (this.size() > 1) {
      this._setHeadNextElement(this.elements[1]);
    }
  }

  pop() {
    return this.elements.shift().datum();
  }

  reverse() {
    return SimpleLinkedList.fromArray(this.toArray().reverse());
  }

  static fromArray(data) {
    let list = new SimpleLinkedList();
    if (Array.isArray(data)) {
      let reversedArr = data.slice().reverse();
      reversedArr.forEach(datum => list.push(datum));
    }
    return list;
  }

  toArray() {
    return this.elements.map(element => element.datum());
  }
}

class Element {
  constructor(datum, nextElement) {
    this.datumValue = datum;
    this.nextElement = nextElement || null;
  }

  datum() {
    return this.datumValue;
  }

  isTail() {
    return this.nextElement === null;
  }

  next() {
    return this.nextElement;
  }

  _setNextElement(nextElement) {
    this.nextElement = nextElement;
  }
}

module.exports = {SimpleLinkedList, Element};

class DNA {
  constructor(strand) {
    this.strand = strand;
  }

  hammingDistance(otherStrand) {
    let num = 0;
    let strandArr = this.strand.split('');
    let otherStrandArr = otherStrand.split('');

    while (strandArr.length && otherStrandArr.length) {
      if (strandArr.shift() !== otherStrandArr.shift()) {
        num++;
      }
    }
    return num;
  };
}

module.exports = DNA;

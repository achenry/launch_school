// triangles
class Triangle {
  constructor(side1, side2, side3) {
    this.sides = [...arguments];
    if (!this.isTriangle()) {
      throw new Error("Invalid triangle lengths");
    }
  }

  kind() {
    if (this.isIsosceles()) return 'isosceles';
    else if (this.isEquilateral()) return 'equilateral';
    else if (this.isScalene()) return 'scalene';
  }

  isTriangle() {
    return this.sides.every(side => side > 0)
      && this.sides[0] + this.sides[1] > this.sides[2]
      && this.sides[1] + this.sides[2] > this.sides[0]
      && this.sides[0] + this.sides[2] > this.sides[1];
  }

  isEquilateral() {
    return this.isTriangle()
      && this.sides[0] === this.sides[1]
      && this.sides[1] === this.sides[2]
      && this.sides[0] === this.sides[2];
  }

  isIsosceles() {
    return this.isTriangle()
      && !this.isEquilateral()
      && (this.sides[0] === this.sides[1]
        || this.sides[0] === this.sides[2]
        || this.sides[1] === this.sides[2]);
  }

  isScalene() {
    return this.isTriangle()
      && !this.isEquilateral()
      && !this.isIsosceles();
  }
}

module.exports = Triangle;

// You are given a function, Square, that takes four parameters, a,
// b, c, d, denoting the length of the square edges.
// Using prototype properties, add a method to Square named
// isSquare that prints true if a Square object has equal edges
// and false if they are unequal.
// Here is the Square function:

function Square(a, b, c, d) {
  this.a = a;
  this.b = b;
  this.c = c;
  this.d = d;
}

Square.prototype.isSquare = function () {
  return this.a === this.b && this.a === this.c && this.a === this.d;
};

square = new Square(2, 2, 2, 2);
console.log(square.isSquare());

square1 = new Square(4, 3, 5, 6);
console.log(square1.isSquare());

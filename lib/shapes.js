// Defines a base class for shapes
class Shape {
  // The constructor sets a default color for all shapes
  constructor() {
    this.color = 'black';
  }

  // Method to set the color of a shape
  setColor(color) {
    this.color = color;
  }
}

// Defines a class for triangles that extends the base Shape class
class Triangle extends Shape {
  // Method to render the triangle as an SVG element
  render() {
    // The points attribute defines the vertices of the triangle
    // The fill attribute sets the color of the triangle
    return `<polygon points="150,18 244,182 56,182" fill="${this.color}" />`;
  }
}

// Define a class for squares that extends the base Shape class
class Square extends Shape {
  // Method to render the square as an SVG element
  render() {
    // The x and y attributes define the position of the square
    // The width and height attributes define the size of the square
    // The fill attribute sets the color of the square
    return `<rect x="100" y="50" width="100" height="100" fill="${this.color}" />`;
  }
}

// Defines a class for circles that extends the base Shape class
class Circle extends Shape {
  // Method to render the circle as an SVG element
  render() {
    // The cx and cy attributes define the center of the circle
    // The r attribute defines the radius of the circle
    // The fill attribute sets the color of the circle
    return `<circle cx="150" cy="100" r="50" fill="${this.color}" />`;
  }
}

// Export the shape classes so they can be used in other modules
module.exports = { Triangle, Square, Circle };
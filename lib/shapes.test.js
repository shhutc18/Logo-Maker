// Import the shape classes from the shapes module
const { Circle, Square, Triangle } = require('./shapes');

// Define a test suite for the shape classes
describe('Shape classes', () => {
  // Test the render method of the Triangle class
  test('Triangle render method', () => {
    // Create a new Triangle instance
    const triangle = new Triangle();
    // Set the color of the triangle to blue
    triangle.setColor('blue');
    // Check that the render method returns the correct SVG string
    expect(triangle.render()).toEqual('<polygon points="150,18 244,182 56,182" fill="blue" />');
  });

  // Test the render method of the Square class
  test('Square render method', () => {
    // Create a new Square instance
    const square = new Square();
    // Set the color of the square to red
    square.setColor('red');
    // Check that the render method returns the correct SVG string
    expect(square.render()).toEqual('<rect x="100" y="50" width="100" height="100" fill="red" />');
  });

  // Test the render method of the Circle class
  test('Circle render method', () => {
    // Create a new Circle instance
    const circle = new Circle();
    // Set the color of the circle to green
    circle.setColor('green');
    // Check that the render method returns the correct SVG string
    expect(circle.render()).toEqual('<circle cx="150" cy="100" r="50" fill="green" />');
  });
});
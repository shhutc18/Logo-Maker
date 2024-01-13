const { Circle, Square, Triangle } = require('./shapes');

describe('Shape classes', () => {
  test('Triangle render method', () => {
    const triangle = new Triangle();
    triangle.setColor('blue');
    expect(triangle.render()).toEqual('<polygon points="150,18 244,182 56,182" fill="blue" />');
  });

  test('Square render method', () => {
    const square = new Square();
    square.setColor('red');
    expect(square.render()).toEqual('<rect x="100" y="50" width="100" height="100" fill="red" />');
  });

  test('Circle render method', () => {
    const circle = new Circle();
    circle.setColor('green');
    expect(circle.render()).toEqual('<circle cx="150" cy="100" r="50" fill="green" />');
  });
});
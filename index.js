// Import the inquirer module for command line interfaces
const inquirer = require('inquirer');
// Import the fs (file system) module for interacting with the file system
const fs = require('fs');

// Define the questions for the command line interface
const questions = [
  { type: 'input', name: 'text', message: 'Enter up to three characters:' },
  { type: 'input', name: 'textColor', message: 'Enter a color keyword or a hexadecimal number for text:' },
  { type: 'list', name: 'shape', message: 'Choose a shape:', choices: ['circle', 'triangle', 'square'] },
  { type: 'input', name: 'shapeColor', message: 'Enter a color keyword or a hexadecimal number for shape:' }
];

// Prompt the user with the questions
inquirer.prompt(questions).then(answers => {
  // Initialize an empty string for the SVG shape
  let shapeSvg = '';
  // Depending on the shape chosen by the user, generate the corresponding SVG element
  switch (answers.shape) {
    case 'circle':
      shapeSvg = `<circle cx="150" cy="100" r="50" fill="${answers.shapeColor}" />`;
      break;
    case 'triangle':
      shapeSvg = `<polygon points="150,50 100,150 200,150" fill="${answers.shapeColor}" />`;
      break;
    case 'square':
      shapeSvg = `<rect x="100" y="50" width="100" height="100" fill="${answers.shapeColor}" />`;
      break;
  }

  // Generate the SVG text element with the user's chosen color and text
  const textSvg = `<text x="150" y="100" fill="${answers.textColor}" text-anchor="middle" dominant-baseline="middle" font-size="25">${answers.text}</text>`;
  // Combine the shape and text into a single SVG image
  const svg = `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">${shapeSvg}${textSvg}</svg>`;

  // Write the SVG image to a file named 'logo.svg'
  fs.writeFile('logo.svg', svg, err => {
    // If there was an error writing the file, throw the error
    if (err) throw err;
    // Log a success message to the console
    console.log('Generated logo.svg');
  });
});
const inquirer = require('inquirer');
const fs = require('fs');

const questions = [
  { type: 'input', name: 'text', message: 'Enter up to three characters:' },
  { type: 'input', name: 'textColor', message: 'Enter a color keyword or a hexadecimal number for text:' },
  { type: 'list', name: 'shape', message: 'Choose a shape:', choices: ['circle', 'triangle', 'square'] },
  { type: 'input', name: 'shapeColor', message: 'Enter a color keyword or a hexadecimal number for shape:' }
];

inquirer.prompt(questions).then(answers => {
  let shapeSvg = '';
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

  const textSvg = `<text x="150" y="100" fill="${answers.textColor}" text-anchor="middle" dominant-baseline="middle" font-size="50">${answers.text}</text>`;
  const svg = `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">${shapeSvg}${textSvg}</svg>`;

  fs.writeFile('logo.svg', svg, err => {
    if (err) throw err;
    console.log('Generated logo.svg');
  });
});
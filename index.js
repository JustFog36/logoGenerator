const inquirer = require('inquirer');
const fs = require('fs');
const {Shape, Triangle, Circle, Square} = require('./lib/shapes');

const questions = [
    {
        type: 'input',
        name: 'text',
        message: 'Enter up to 3 characters for your logo: ',
        validate: (input) => input.length <= 3
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'Enter the text color(keyword or hex): ',
    },
    {
        type: 'list',
        name: 'shape',
        message: 'Pick a shape for your logo: ',
        choices: ['Triangle', 'Circle', 'Square'],
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'Enter the shape color(keyword or hex): ',
    }
]
inquirer.prompt(questions).then((answers) => {
     //Set the responses to a variable
    const {text, textColor, shape, shapeColor} = answers;

    //Initiate new shape
    const shapeObj = new Shape();
    //Set shape color
    shapeObj.setColor(shapeColor);

    switch(shape) {
        case 'Triangle':
            const triangle = new Triangle();
            triangle.setColor(shapeColor);
            svgElement = triangle.render();
            break;
        case 'Circle':
            const circle = new Circle();
            circle.setColor(shapeColor);
            svgElement = circle.render();
            break;
        case 'Square':
            const square = new Square();
            square.setColor(shapeColor);
            svgElement = square.render();
            break;
    }

    //Text size
    let x = 150, y = 120;
    if(shape === 'Triangle') {
        y = 135;
    } else if(shape === 'Square') {
        y = 145;
    }

     //Create the final image using the data
     const finalSvg = 
     `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
         ${svgElement}
         <text x="${x}" y="${y}" fill="${textColor}" font-size="50" text-anchor="middle">${text}</text>
     </svg>`

     fs.writeFileSync('logo.svg', finalSvg);
     console.log('Sucessfully generated a logo!')
})

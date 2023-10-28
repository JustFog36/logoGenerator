const inquirer = require('inquirer')
const fs = require('fs')

const questions = [
    {
        type: 'input',
        name: 'text',
        message: 'Enter up to 3 characters for your logo: ',
        validate: (input) => input.length <= 3,
    }
]
inquirer.prompt(questions)
